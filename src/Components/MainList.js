import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {faCog, faCopy, faList, faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {encode, decode} from 'js-base64';
import {WhatsappShareButton, WhatsappIcon} from '@kashuab/react-share';
import Popup from 'reactjs-popup';
import * as uuid from 'uuid';
import axios from 'axios';

import ListItem from './ListItem';
import {setFilterText, setFilterType, fetch, setFilterCategory, setFinal, setList, setImagesSize, setTitlesSize, setLangauge, setOnline, setId, setLastConnected, setListLength} from '../redux/';
import {updateOptions} from './Options';
import heFlag from '../imgs/he_flag.png';
import enFlag from '../imgs/en_flag.png';

let updatingList;
let dListGetTimeout;
let dListPostTimeout;

const renderByFilter = (filtering, filteringType, fetchData, filterCategory, final, list, currentPage, listLength, setLimitPage, limitPage, setCurrentPage) => {
    if(filterCategory)
        fetchData = fetchData.filter(item => item.filter == filterCategory);
        
    if(filtering != '') {
        filtering = filtering.toLowerCase();
        if(filteringType) {
            fetchData = fetchData.filter(item => item.title.includes(filtering));
        } else {
            for(let i=0;i<filtering.length;i++) {
                fetchData = fetchData.filter(item => item.title[i] == filtering[i]);
            }
        }
    }

    fetchData = fetchData.sort((a, b) => `${a.order}${a.title}` < `${b.order}${b.title}` ? -1 : 1);

    if(final)
        fetchData = fetchData.filter(item => list[item.img.split("").reverse().join("").slice(8).split("").reverse().join("")]);

    if(fetchData.length <= listLength + currentPage * listLength && !limitPage) {
        setLimitPage(true);
    } else if(!(fetchData.length <= listLength + currentPage * listLength) && limitPage) {
        setLimitPage(false);
    }
    if(fetchData.length <= currentPage * listLength && currentPage > 0) {
        setCurrentPage(currentPage - 1);
        console.log(fetchData.length);
        console.log('back');
    }
    fetchData = fetchData.map((item, index)=> {
        if(index < listLength + currentPage * listLength && index >= currentPage * listLength)
            return <ListItem logo={item.img} title={item.title} category={item.category} id={item.img.split("").reverse().join("").slice(8).split("").reverse().join("")}/>;
        else
            return;
    });
    return fetchData;
}

const getBase64Code = (list, msg) => {
    list = JSON.stringify(list);
    list = encode(list);
    setClipboard(list);
    alert(`${msg}!`);
}

const getListString = (list, fetchData, successMsg, noteMsg) => {
    let listKeys = Object.keys(list);
    let listValues = Object.values(list).map(item => item[0] != undefined ? item[0] : item);
    listKeys = listKeys.map((listKey, index) => {
        try {
            const specificItem = fetchData.find(item => item.img.split("").reverse().join("").slice(8).split("").reverse().join("") == listKey);
            if(specificItem && listValues[index]) {
                specificItem.title = specificItem.title.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
                const note = list[specificItem.img.split("").reverse().join("").slice(8).split("").reverse().join("")][1];
                return `${specificItem.title}: ${listValues[index]}${note ? `, ${noteMsg}: ${note}` : ''}`;
            }
        }
        catch {
            return;
        }
    });
    if(listKeys) {

        listKeys = listKeys.join('\n');
        setClipboard(listKeys);
        alert(`${successMsg}!`);
    }
}

const DynamicWhatsappShareCode = list => {
    const getUrl = async () => {
        updatingList = list;
        updatingList = JSON.stringify(updatingList);
        updatingList = encode(updatingList);
        return updatingList;
    };
  
    return (
        <WhatsappShareButton url={getUrl}><WhatsappIcon size={60}/></WhatsappShareButton>
    );
};

const DynamicWhatsappShareString = (list, fetchData, noteMsg) => {
    const getUrl = async () => {
        let listKeys = Object.keys(list);
        let listValues = Object.values(list).map(item => item[0] != undefined ? item[0] : item);
        listKeys = listKeys.map((listKey, index) => {
            const specificItem = fetchData.find(item => item.img.split("").reverse().join("").slice(8).split("").reverse().join("") == listKey);
            if(specificItem && listValues[index]) {
                specificItem.title = specificItem.title.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
                const note = list[specificItem.img.split("").reverse().join("").slice(8).split("").reverse().join("")][1];
                return `${specificItem.title}: ${listValues[index]}${note ? `, ${noteMsg}: ${note}` : ''}`;
            }
        });
        if(listKeys) {
            listKeys = listKeys.join('\n');
            return listKeys;
        }
    };
  
    return (
        <WhatsappShareButton url={getUrl}><WhatsappIcon size={60}/></WhatsappShareButton>
    );
};

const sharedListStart = (id, setList, promptMsg, errorMsg, setOnline, setId, setLastConnected, fetchData) => {
    axios.get(`${fetchData.general.server}/dlist?id=${id}`)
    .then(json => {
        setList(json.data, promptMsg, errorMsg);
        setId(id);
        setOnline(true);
        setLastConnected(id);
        localStorage.setItem('options-last-connected', id);
        dListGetTimeout = setTimeout(() => sharedListGet(id, setList, promptMsg, errorMsg, fetchData), 1000);
    });
}

const sharedListGet = (id, setList, promptMsg, errorMsg, fetchData) => {
    axios.get(`${fetchData.general.server}/dlist?id=${id}`)
    .then(json => {
        setList(json.data, promptMsg, errorMsg);
    });
}

export const sharedListPost = (id, list, fetchData) => {
    if(dListPostTimeout) {
        clearTimeout(dListPostTimeout);
    }
    dListPostTimeout = setTimeout(() => {
        axios.post(`${fetchData.general.server}/dlist?id=${id}`, list);
        dListPostTimeout = undefined;
    }, 500);
}


const setPasteCode = (setList, promptMsg, errorMsg, setOnline, setId, id, isOnline, setLastConnected, fetchData) => {
    try {
        let list = prompt(`${promptMsg}`);
        if(list == null) {
            return;
        }
        if(uuid.validate(list)) {
            if(dListGetTimeout) {
                clearInterval(dListGetTimeout);
                dListGetTimeout = undefined;
                setOnline(false);
            }
            sharedListStart(list, setList, promptMsg, errorMsg, setOnline, setId, setLastConnected, fetchData);
        } else{            
            list = decode(list);
            list = JSON.parse(list);
            if(isOnline) {
                sharedListPost(id, list, fetchData);
            }
            setList(list);
        }
    }
    catch {
        alert(`${errorMsg}!`);
    }
}

const resetList = (setList, id, isOnline, fetchData, setCurrentPage) => {
    if(isOnline) {
        sharedListPost(id, {}, fetchData);
    }
    setList(JSON.parse(atob('e30=')));
    setCurrentPage(0);
}

const setClipboard = (str) => {
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

const changeLangauge = (setLangaugeFunc, langauge) => {
    setLangaugeFunc(langauge);
    localStorage.setItem('options-langauge', langauge);
}


function MainList(props) {
    useEffect(props.fetch, []);
    useEffect(() => updateOptions(props.setImagesSize, props.setTitlesSize, props.setLangauge, props.setLastConnected), []);
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

        function clean(obj) {
            for (const propName in obj) {
              if (obj[propName] == '') {
                delete obj[propName];
              }
            }
            return obj
          }

          clean(props.list);
    });

    useEffect(() => {
        if(dListGetTimeout) {
            clearInterval(dListGetTimeout);
            dListGetTimeout = setTimeout(() => sharedListGet(props.id, props.setList, props.fetchData[props.lang].strings[15], props.fetchData[props.lang].strings[16], props.fetchData), dListPostTimeout ? 1500 : 1000);
        }
    }, [props.list]);

    const [currentPage, setCurrentPage] = useState(0);
    const [limitPage, setLimitPage] = useState(false);

    useEffect(() => {
        setCurrentPage(0);
    }, [props.filterText, props.filterCategory, props.final, props.filterType])

    return (
        !props.fetchLoading ?
        <div className="text-center">
            <Link to="/options">
                <FontAwesomeIcon type="button" icon={faCog} size="4x" className="position-absolute border-right border-bottom" style={{left: 0, zIndex: 1}}/>
            </Link>
            <img type="button" onClick={() => changeLangauge(props.setLangauge, props.lang == 'en' ? 'he' : 'en')} src={props.lang == 'en' ? enFlag : heFlag} className="position-absolute" style={{right: 0, zIndex: 1}}></img>
            <input placeholder={`${props.fetchData[props.lang].strings[0]}: ${props.filterType ? props.fetchData[props.lang].strings[2] : props.fetchData[props.lang].strings[1]}`} className="text-center" onChange={event => props.setFilterText(event.target.value)}></input>
            <div className="dropdown mt-2">
                <button className="btn btn-primary rounded-0 dropdown-toggle" dir="rtl" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.fetchData[props.lang].strings[10+props.filterCategory]}
                </button>
                <button className="btn btn-primary rounded-0" type="button" onClick={e => {
                    e.target.blur();
                    props.setFinal(!props.final);
                }}>{`${props.final ? props.fetchData[props.lang].strings[3] : props.fetchData[props.lang].strings[4]}`}</button>
                <div>
                    <div>
                        <Popup closeOnDocumentClick={false} trigger={<div className="btn btn-info rounded-0"><FontAwesomeIcon icon={faList} size="1x"/></div>}>
                            <div className="col text-center">
                                <button className="btn btn-secondary rounded-0 col-12" onClick={e => {
                                    e.target.blur();
                                    setPasteCode(props.setList, props.fetchData[props.lang].strings[15], props.fetchData[props.lang].strings[16], props.setOnline, props.setId, props.id, props.isOnline, props.setLastConnected, props.fetchData);
                                }}>{props.fetchData[props.lang].strings[5]}</button>
                                <Popup closeOnDocumentClick={false} trigger={<div className="btn btn-primary rounded-0 col-12">{props.fetchData[props.lang].strings[6]}</div>}>

                                    <Popup closeOnDocumentClick={true} trigger={<div className="btn btn-secondary rounded-0 col-12">{props.fetchData[props.lang].strings[7]}</div>}>
                                        <div className="d-flex justify-content-around">
                                            <button className="btn btn-secondary rounded-0" onClick={e => {
                                                e.target.blur();
                                                getListString(props.list, props.fetchData[props.lang].items, props.fetchData[props.lang].strings[14], props.fetchData[props.lang].strings[26]);
                                            }}><FontAwesomeIcon icon={faCopy} size="2x"/></button>
                                            {DynamicWhatsappShareString(props.list, props.fetchData[props.lang].items, props.fetchData[props.lang].strings[26])}
                                        </div>
                                    </Popup>

                                    <Popup closeOnDocumentClick={true} trigger={<div className="btn btn-secondary rounded-0 col-12">{props.fetchData[props.lang].strings[8]}</div>}>
                                        <div className="d-flex justify-content-around">
                                            <button className="btn btn-secondary rounded-0" onClick={e => {
                                                e.target.blur();
                                                getBase64Code(props.list, props.fetchData[props.lang].strings[14]);
                                            }}><FontAwesomeIcon icon={faCopy} size="2x"/></button>
                                            {DynamicWhatsappShareCode(props.list)}
                                        </div>
                                    </Popup>
                                    
                                </Popup>
                                <button className="btn btn-danger rounded-0 col-12" onClick={e => {
                                    e.target.blur();
                                    window.confirm(`${props.fetchData[props.lang].strings[17]}?`) && resetList(props.setList, props.id, props.isOnline, props.fetchData, setCurrentPage);
                                }}>{props.fetchData[props.lang].strings[9]}</button>
                            </div>
                        </Popup>
                    </div>
                </div>
                
                <div className="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#" onClick={() => props.setFilterCategory(0)}>{props.fetchData[props.lang].strings[10]}</a>
                    <a className="dropdown-item" href="#" onClick={() => props.setFilterCategory(1)}>{props.fetchData[props.lang].strings[11]}</a>
                    <a className="dropdown-item" href="#" onClick={() => props.setFilterCategory(2)}>{props.fetchData[props.lang].strings[12]}</a>
                    <a className="dropdown-item" href="#" onClick={() => props.setFilterCategory(3)}>{props.fetchData[props.lang].strings[13]}</a>
                </div>
            </div>
            <button onClick={e => {
                e.target.blur();
                props.setFilterType(!props.filterType);
            }} className="btn btn-danger my-2">{`${props.fetchData[props.lang].strings[0]}: ${props.filterType ? props.fetchData[props.lang].strings[2] : props.fetchData[props.lang].strings[1]}`}</button>
            
            {props.isOnline ? <div dir={`${props.lang == "en" ? 'ltr' : 'rtl'}`} className="btn d-block" onClick={() => {
                if(window.confirm(`${props.fetchData[props.lang].strings[28]}?`)) {
                    clearInterval(dListGetTimeout);
                    dListGetTimeout = undefined;
                    props.setOnline(false);
                }
            }}><FontAwesomeIcon icon={faGlobe} size="2x"/><div>{props.fetchData[props.lang].strings[27]}</div></div> : props.lastConnected ? [<br/>, <btn dir={`${props.lang == "en" ? 'ltr' : 'rtl'}`} className="btn btn-info" onClick={() => sharedListStart(props.lastConnected, props.setList, props.fetchData[props.lang].strings[15], props.fetchData[props.lang].strings[16], props.setOnline, props.setId, props.setLastConnected, props.fetchData)}>{`${props.fetchData[props.lang].strings[29]}: ${props.lastConnected}`}</btn>] : ''}

            {renderByFilter(props.filterText, props.filterType, props.fetchData[props.lang].items, props.filterCategory, props.final, props.list, currentPage, props.listLength, setLimitPage, limitPage, setCurrentPage)}
            <div className="d-block">
                <div className={`btn btn-primary col-6 rounded-0 ${limitPage ? 'disabled' : ''}`} onClick={() => !limitPage ? setCurrentPage(currentPage + 1) : ''}>{props.fetchData[props.lang].strings[30]}</div>
                <div className={`btn btn-primary col-6 rounded-0 ${!currentPage ? 'disabled' : ''}`}  onClick={() => currentPage ? setCurrentPage(currentPage - 1) : ''}>{props.fetchData[props.lang].strings[31]}</div>
            </div>
        </div>
        :
        <div className="text-center display-2">{props.lang == 'en' ? 'Loading' : 'טוען'}</div>
    )
}

const mapStateToProps = state => {
    return {
        filterText: state.filtering.filterText,
        filterType: state.filtering.filterType,
        filterCategory: state.filtering.filterCategory,
        final: state.filtering.final,
        listLength: state.filtering.listLength,

        fetchLoading: state.api.loading,
        fetchData: state.api.data,
        fetchError: state.api.error,
        isOnline: state.api.isOnline,
        id: state.api.id,
        lastConnected: state.api.lastConnected,


        list: state.list,
        notes: state.notes,

        lang: state.options.lang

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFilterText: val => dispatch(setFilterText(val)),
        setFilterType: val => dispatch(setFilterType(val)),
        fetch: () => dispatch(fetch()),
        setFilterCategory: val => dispatch(setFilterCategory(val)),
        setFinal: val => dispatch(setFinal(val)),
        setList: val => dispatch(setList(val)),
        setImagesSize: val => dispatch(setImagesSize(val)),
        setTitlesSize: val => dispatch(setTitlesSize(val)),
        setLangauge: val => dispatch(setLangauge(val)),
        setOnline: val => dispatch(setOnline(val)),
        setId: val => dispatch(setId(val)),
        setLastConnected: val => dispatch(setLastConnected(val)),
        setListLength: val => dispatch(setListLength(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainList);