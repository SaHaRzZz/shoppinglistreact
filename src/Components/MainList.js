import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {faCog, faCopy, faList} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {encode, decode} from 'js-base64';
import {WhatsappShareButton, WhatsappIcon} from 'react-share';
import Popup from 'reactjs-popup';

import ListItem from './ListItem';
import {setFilterText, setFilterType, setFilterTypeHebrew, fetch, setFilterCategory, setFinal, setFinalHebrew, setList, setImagesSize, setTitlesSize} from '../redux/';
import {updateOptions} from './Options';
const FILTERING_TYPE_WHOLE = 'FILTERING_TYPE_WHOLE';
const FILTERING_TYPE_SOME = 'FILTERING_TYPE_SOME';
const FILTERING_CAT_ALL = 'הכל';

let updatingList;
let stringList;

const renderByFilter = (filtering, filteringType, fetchData, filterCategory, final, list) => {
    if(filterCategory != FILTERING_CAT_ALL)
        fetchData = fetchData.filter(item => item.category == filterCategory);
        
    if(filtering != '') {
        switch(filteringType) {
            case FILTERING_TYPE_WHOLE:
                for(let i=0;i<filtering.length;i++) {
                    fetchData = fetchData.filter(item => item.title[i] == filtering[i]);
                }
                break;
            case FILTERING_TYPE_SOME:
                fetchData = fetchData.filter(item => item.title.includes(filtering));
                break;
        }
    }

    fetchData = fetchData.sort((a, b) => `${a.order}${a.title}` < `${b.order}${b.title}` ? -1 : 1);

    if(final)
        fetchData = fetchData.filter(item => list[item.img.split("").reverse().join("").slice(8).split("").reverse().join("")]);

    fetchData = fetchData.map(item => <ListItem logo={item.img} title={item.title} category={item.category} id={item.img.split("").reverse().join("").slice(8).split("").reverse().join("")}/>);
    return fetchData;
}

const getBase64Code = list => {
    list = JSON.stringify(list);
    list = encode(list);
    setClipboard(list);
    alert('הרשימה הועתקה!');
}

const getListString = (list, fetchData) => {
    let listKeys = Object.keys(list);
    let listValues = Object.values(list).map(item => item[0]);
    listKeys = listKeys.map((listKey, index) => {
        const specificItem = fetchData.find(item => item.img.split("").reverse().join("").slice(8).split("").reverse().join("") == listKey);
        return `${specificItem.title}: ${listValues[index]}`;
    });
    listKeys = listKeys.join('\n');
    setClipboard(listKeys);
    alert('הרשימה הועתקה!')
}

const updateStringList = (list, fetchData) => {
    let listKeys = Object.keys(list);
    let listValues = Object.values(list).map(item => item[0]);
    listKeys = listKeys.map((listKey, index) => {
        const specificItem = fetchData.find(item => item.img.split("").reverse().join("").slice(8).split("").reverse().join("") == listKey);
        return `${specificItem.title}: ${listValues[index]}`;
    });
    listKeys = listKeys.join('\n');
    stringList = listKeys;
}

const setBase64Code = setList => {
    try {

        let list = prompt('הכניסו קוד רשימה');
        if(list == null) {
            return;
        }
        list = decode(list);
        list = JSON.parse(list);
        setList(list);
    }
    catch {
        alert('קוד שגוי!');
    }
}

const getBase64Whatsapp = list => {
    updatingList = list;
    updatingList = JSON.stringify(updatingList);
    updatingList = encode(updatingList);
}

const resetList = setList => {setList(JSON.parse(atob('e30=')))}

const changeFilterType = (current, setFilterTypeFunc, setFilterTypeHebrewFunc) => {
    switch(current) {
        case FILTERING_TYPE_WHOLE:
            setFilterTypeFunc(FILTERING_TYPE_SOME);
            setFilterTypeHebrewFunc("שם חלקי");
            break;
        case FILTERING_TYPE_SOME:
            setFilterTypeFunc(FILTERING_TYPE_WHOLE);
            setFilterTypeHebrewFunc("שם מדויק");
            break;
    }
}

const changeFinal = (final, setFinalFunc, setFinalHebrewFunc) => {
    switch(final) {
        case true:
            setFinalFunc(false);
            setFinalHebrewFunc("הכנת רשימה סופית");
            break;
        case false:
            setFinalFunc(true);
            setFinalHebrewFunc("חזרה להכנת רשימה");
            break;
    }
}

const setClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}


function MainList(props) {
    useEffect(props.fetch, []);
    useEffect(() => updateOptions(props.setImagesSize, props.setTitlesSize), []);
    useEffect(() => {
        if(localStorage.getItem('saved-list')) {
            updatingList = localStorage.getItem('saved-list');
            updatingList = decode(updatingList);
            updatingList = JSON.parse(updatingList);
            props.setList(updatingList);
        }
        else {
            localStorage.setItem('saved-list', {});
        }
    }, []);
    useEffect(() => {
        updatingList = props.list;
        updatingList = JSON.stringify(updatingList);
        updatingList = encode(updatingList);
        localStorage.setItem('saved-list', updatingList);
    })

    return (
        !props.fetchLoading ?
        <div className="text-center">
            <Link to="/options">
                <FontAwesomeIcon type="button" icon={faCog} size="4x" className="position-absolute border-right border-bottom" style={{left: 0, zIndex: 1}}/>
            </Link>
            <input placeholder={`חיפוש לפי: ${props.filterTypeHebrew}`} className="text-center" onChange={event => props.setFilterText(event.target.value)}></input>
            <div className="dropdown mt-2">
                <button className="btn btn-primary rounded-0 dropdown-toggle" dir="rtl" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.filterCategory}
                </button>
                <button className="btn btn-primary rounded-0" type="button" onClick={e => {
                    e.target.blur();
                    changeFinal(props.final, props.setFinal, props.setFinalHebrew);
                }}>{props.finalHebrew}</button>
                <div>
                    <div>
                        <Popup closeOnDocumentClick={false} trigger={<div className="btn btn-info rounded-0"><FontAwesomeIcon icon={faList} size="1x"/></div>}>
                            <div className="col text-center">
                                <button className="btn btn-secondary rounded-0 col-12" onClick={e => {
                                    e.target.blur();
                                    setBase64Code(props.setList);
                                }}>הדבק רשימה</button>
                                <Popup closeOnDocumentClick={false} trigger={<div className="btn btn-primary rounded-0 col-12">העתק רשימה</div>}>

                                    <Popup closeOnDocumentClick={true} trigger={<div className="btn btn-secondary rounded-0 col-12">העתק רשימה כטקסט</div>}>
                                        <div className="d-flex justify-content-around">
                                            <button className="btn btn-secondary rounded-0" onClick={e => {
                                                e.target.blur();
                                                getListString(props.list, props.fetchData);
                                            }}><FontAwesomeIcon icon={faCopy} size="2x"/></button>
                                            <WhatsappShareButton beforeOnClick={updateStringList(props.list, props.fetchData)} url={stringList}><WhatsappIcon size={60}/></WhatsappShareButton>
                                        </div>
                                    </Popup>

                                    <Popup closeOnDocumentClick={true} trigger={<div className="btn btn-secondary rounded-0 col-12">העתק רשימה כקוד</div>}>
                                        <div className="d-flex justify-content-around">
                                            <button className="btn btn-secondary rounded-0" onClick={e => {
                                                e.target.blur();
                                                getBase64Code(props.list);
                                            }}><FontAwesomeIcon icon={faCopy} size="2x"/></button>
                                            <WhatsappShareButton beforeOnClick={getBase64Whatsapp(props.list)} url={updatingList}><WhatsappIcon size={60}/></WhatsappShareButton>
                                        </div>
                                    </Popup>
                                    
                                </Popup>
                                <button className="btn btn-danger rounded-0 col-12" onClick={e => {
                                    e.target.blur();
                                    window.confirm('לאפס את הרשימה?') && resetList(props.setList);
                                }}>איפוס</button>
                            </div>
                        </Popup>
                    </div>
                </div>
                
                <div className="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#" onClick={event => props.setFilterCategory(event.target.innerText)}>הכל</a>
                    <a className="dropdown-item" href="#" onClick={event => props.setFilterCategory(event.target.innerText)}>אוכל</a>
                    <a className="dropdown-item" href="#" onClick={event => props.setFilterCategory(event.target.innerText)}>היגיינה</a>
                    <a className="dropdown-item" href="#" onClick={event => props.setFilterCategory(event.target.innerText)}>תינוק</a>
                </div>
            </div>
            <button onClick={e => {
                e.target.blur();
                changeFilterType(props.filterType, props.setFilterType, props.setFilterTypeHebrew);
            }} className="btn btn-danger my-2">חיפוש לפי: {props.filterTypeHebrew}</button>
            
            {renderByFilter(props.filterText, props.filterType, props.fetchData, props.filterCategory, props.final, props.list)}

        </div>
        :
        <div className="text-center display-2">Loading...</div>
    )
}

const mapStateToProps = state => {
    return {
        filterText: state.filtering.filterText,
        filterType: state.filtering.filterType,
        filterTypeHebrew: state.filtering.filterTypeHebrew,
        filterCategory: state.filtering.filterCategory,
        final: state.filtering.final,
        finalHebrew: state.filtering.finalHebrew,

        fetchLoading: state.api.loading,
        fetchData: state.api.data,
        fetchError: state.api.error,

        list: state.list,
        notes: state.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFilterText: val => dispatch(setFilterText(val)),
        setFilterType: val => dispatch(setFilterType(val)),
        setFilterTypeHebrew: val => dispatch(setFilterTypeHebrew(val)),
        fetch: () => dispatch(fetch()),
        setFilterCategory: val => dispatch(setFilterCategory(val)),
        setFinal: val => dispatch(setFinal(val)),
        setFinalHebrew: val => dispatch(setFinalHebrew(val)),
        setList: val => dispatch(setList(val)),
        setImagesSize: val => dispatch(setImagesSize(val)),
        setTitlesSize: val => dispatch(setTitlesSize(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainList);