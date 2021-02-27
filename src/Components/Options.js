import React from 'react';
import {connect} from 'react-redux';
import {faHome, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, useHistory} from 'react-router-dom';

import {setImagesSize, setTitlesSize, setLangauge, setLastConnected, setFilterText, setListLength, setCameFromOptions} from '../redux/';
import heFlag from '../imgs/he_flag.png';
import enFlag from '../imgs/en_flag.png';
import placeholderImg from '../imgs/_400.png';

const makeSetImagesSize = (setImagesSizeFunc, payload) => {
    setImagesSizeFunc(payload);
    localStorage.setItem('options-images-size', payload);
}

const makeSetTitlesSize = (setTitlesSizeFunc, payload) => {
    setTitlesSizeFunc(payload);
    localStorage.setItem('options-titles-size', payload);
}

const makeSetListLength = (setListLengthFunc, payload) => {
    setListLengthFunc(payload);
    localStorage.setItem('options-list-length', payload);
}

export const updateOptions = (setImagesSizeFunc, setTitlesSizeFunc, setLangaugeFunc, setLastConnectedFunc, setListLengthFunc) => {
    if(localStorage.getItem('options-images-size'))
        setImagesSizeFunc(localStorage.getItem('options-images-size'));
    if(localStorage.getItem('options-titles-size'))
        setTitlesSizeFunc(localStorage.getItem('options-titles-size'));
    if(localStorage.getItem('options-langauge'))
        setLangaugeFunc(localStorage.getItem('options-langauge'));
    else {
        setLangaugeFunc('en');
        localStorage.setItem('options-langauge', 'en');
    }
    if(localStorage.getItem('options-last-connected'))
        setLastConnectedFunc(localStorage.getItem('options-last-connected'));
    if(localStorage.getItem('options-list-length'))
        setListLengthFunc(localStorage.getItem('options-list-length'));
}

const changeLangauge = (setLangaugeFunc, langauge) => {
    setLangaugeFunc(langauge);
    localStorage.setItem('options-langauge', langauge);
}

function Options(props) {
    const history = useHistory();
    if(!props.fetchData) {
        history.push('/');
        return '';
    }
    props.setCameFromOptions(true);

    const exampleCard = () => {
        return (
            <div>
            <div className="card flex-row my-1 shadow text-center" style={{backgroundColor: 'rgb(255, 0, 0, 0.5)'}}>
                <div className="card-header border-0" style={{transition: '1s', height: `${parseInt(props.options.imagesSize.split("").reverse().join("").slice(2).split("").reverse().join("")) + 24}px`}}>
                    <img src={placeholderImg} className="user-select-none" style={{width: props.options.imagesSize, transition: '1s'}}/>
                </div>
                <div className="card-body row p-0 m-0 text-wrap">
                    <div className="card-title text-decoration-underline font-weight-bold col-5 h5 m-0 user-select-none align-self-center text-capitalize" style={{fontSize: props.options.titlesSize, transition: '1s'}}>{props.fetchData[props.lang].strings[54]}</div>
                    <div className="text-center h5 font-italic align-self-center">
                        <div className="rounded-circle shadow-lg col-1 font-italic mx-2">
                            <div className="mr-2 position-absolute" style={{transform: "translate(-50%, -40%)"}}><FontAwesomeIcon size="2x"  icon={faPlusCircle}/></div>
                        </div>
                    </div>
                    <div className="card-title h-100 text-muted m-0 user-select-none align-self-center position-absolute text-capitalize" style={{right: '10px'}}>{props.fetchData[props.lang].strings[53]}</div>
                </div>
                </div>
            </div>
        )
    }

    return (
        <div className="text-center">
            <Link to="/">
                <FontAwesomeIcon type="button" icon={faHome} size="4x" className="position-absolute border-right border-bottom" style={{left: 0, top: 0, zIndex: 1}}/>
            </Link>
            <img type="button" onClick={() => changeLangauge(props.setLangauge, props.lang == 'en' ? 'he' : 'en')} src={props.lang == 'en' ? enFlag : heFlag} className="position-absolute" style={{right: 0, top: 0, zIndex: 1}}></img>
            <div style={{marginTop: '80px'}}><hr/></div>
            <div className="container w-75 p-0">
                <div class="input-group mt-2" dir={`${props.lang == 'en' ? 'ltr' : 'rtl'}`}>
                    <div class="input-group-prepend">
                        <label class="input-group-text" style={{borderRadius: `${props.lang == 'en' ? '3px 0 0 3px' : '0 3px 3px 0'}`, width: '11rem'}} for="inputGroupSelect01">{props.fetchData[props.lang].strings[23]}</label>
                    </div>
                    <select style={{borderRadius: `${props.lang == 'en' ? '0 3px 3px 0' : '3px 0 0 3px'}`}} dir={`${props.lang == 'en' ? 'ltr' : 'rtl'}`} onChange={e => makeSetImagesSize(props.setImagesSize, e.target.value)} class="custom-select" id="inputGroupSelect01">
                        <option value="64px" selected={props.options.imagesSize == '64px' ? true : false}>{props.fetchData[props.lang].strings[19]}</option>
                        <option value="96px" selected={props.options.imagesSize == '96px' ? true : false}>{props.fetchData[props.lang].strings[20]}</option>
                        <option value="128px" selected={props.options.imagesSize == '128px' ? true : false}>{props.fetchData[props.lang].strings[21]}</option>
                    </select>
                </div>

                <div class="input-group mt-2" dir={`${props.lang == 'en' ? 'ltr' : 'rtl'}`}>
                    <div class="input-group-prepend">
                        <label class="input-group-text" style={{borderRadius: `${props.lang == 'en' ? '3px 0 0 3px' : '0 3px 3px 0'}`, width: '11rem'}} for="inputGroupSelect02">{props.fetchData[props.lang].strings[24]}</label>
                    </div>
                    <select style={{borderRadius: `${props.lang == 'en' ? '0 3px 3px 0' : '3px 0 0 3px'}`}} dir={`${props.lang == 'en' ? 'ltr' : 'rtl'}`} onChange={e => makeSetTitlesSize(props.setTitlesSize, e.target.value)} class="custom-select" id="inputGroupSelect01">
                        <option value="2vw" selected={props.options.titlesSize == '2vw' ? true : false}>{props.fetchData[props.lang].strings[18]}</option>
                        <option value="3vw" selected={props.options.titlesSize == '3vw' ? true : false}>{props.fetchData[props.lang].strings[19]}</option>
                        <option value="4vw" selected={props.options.titlesSize == '4vw' ? true : false}>{props.fetchData[props.lang].strings[20]}</option>
                        <option value="5vw" selected={props.options.titlesSize == '5vw' ? true : false}>{props.fetchData[props.lang].strings[21]}</option>
                        <option value="6vw" selected={props.options.titlesSize == '6vw' ? true : false}>{props.fetchData[props.lang].strings[22]}</option>
                    </select>
                </div>

                <div class="input-group my-2" dir={`${props.lang == 'en' ? 'ltr' : 'rtl'}`}>
                    <div class="input-group-prepend">
                        <label class="input-group-text" style={{borderRadius: `${props.lang == 'en' ? '3px 0 0 3px' : '0 3px 3px 0'}`, width: '11rem'}} for="inputGroupSelect03">{props.fetchData[props.lang].strings[33]}</label>
                    </div>
                    <select style={{borderRadius: `${props.lang == 'en' ? '0 3px 3px 0' : '3px 0 0 3px'}`}} dir={`${props.lang == 'en' ? 'ltr' : 'rtl'}`} onChange={e => makeSetListLength(props.setListLength, e.target.value)} class="custom-select" id="inputGroupSelect01">
                        <option value="5" selected={props.listLength == '5' ? true : false}>5</option>
                        <option value="10" selected={props.listLength == '10' ? true : false}>10</option>
                        <option value="20" selected={props.listLength == '20' ? true : false}>20</option>
                        <option value="80" selected={props.listLength == '40' ? true : false}>40</option>
                        <option value="40" selected={props.listLength == '80' ? true : false}>80</option>
                    </select>
                </div>
            </div>
            {exampleCard()}
            <div className="h2 font-weight-bold position-absolute border-top border-right m-0 user-select-none" style={{bottom: 0}}>V-{props.options.appVersion}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        options: state.options,
        lang: state.options.lang,
        fetchData: state.api.data,
        listLength: state.filtering.listLength,
        cameFromOptions: state.filtering.cameFromOptions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setImagesSize: val => dispatch(setImagesSize(val)),
        setTitlesSize: val => dispatch(setTitlesSize(val)),
        setLangauge: val => dispatch(setLangauge(val)),
        setLastConnected: val => dispatch(setLastConnected(val)),
        setFilterText: val => dispatch(setFilterText(val)),
        setListLength: val => dispatch(setListLength(val)),
        setCameFromOptions: val => dispatch(setCameFromOptions(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);