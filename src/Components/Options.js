import React from 'react';
import {connect} from 'react-redux';
import {faHome} from '@fortawesome/free-solid-svg-icons';
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
                        <label class="input-group-text" style={{borderRadius: `${props.lang == 'en' ? '3px 0 0 3px' : '0 3px 3px 0'}`, width: '10rem'}} for="inputGroupSelect01">{props.fetchData[props.lang].strings[23]}</label>
                    </div>
                    <select style={{borderRadius: `${props.lang == 'en' ? '0 3px 3px 0' : '3px 0 0 3px'}`}} dir={`${props.lang == 'en' ? 'ltr' : 'rtl'}`} onChange={e => makeSetImagesSize(props.setImagesSize, e.target.value)} class="custom-select" id="inputGroupSelect01">
                        <option value="64px" selected={props.options.imagesSize == '64px' ? true : false}>{props.fetchData[props.lang].strings[19]}</option>
                        <option value="96px" selected={props.options.imagesSize == '96px' ? true : false}>{props.fetchData[props.lang].strings[20]}</option>
                        <option value="128px" selected={props.options.imagesSize == '128px' ? true : false}>{props.fetchData[props.lang].strings[21]}</option>
                    </select>
                </div>

                <div class="input-group mt-2" dir={`${props.lang == 'en' ? 'ltr' : 'rtl'}`}>
                    <div class="input-group-prepend">
                        <label class="input-group-text" style={{borderRadius: `${props.lang == 'en' ? '3px 0 0 3px' : '0 3px 3px 0'}`}} for="inputGroupSelect02">{props.fetchData[props.lang].strings[24]}</label>
                    </div>
                    <select style={{borderRadius: `${props.lang == 'en' ? '0 3px 3px 0' : '3px 0 0 3px'}`}} dir={`${props.lang == 'en' ? 'ltr' : 'rtl'}`} onChange={e => makeSetTitlesSize(props.setTitlesSize, e.target.value)} class="custom-select" id="inputGroupSelect01">
                        <option value="2vw" selected={props.options.titlesSize == '2vw' ? true : false}>{props.fetchData[props.lang].strings[18]}</option>
                        <option value="3vw" selected={props.options.titlesSize == '3vw' ? true : false}>{props.fetchData[props.lang].strings[19]}</option>
                        <option value="4vw" selected={props.options.titlesSize == '4vw' ? true : false}>{props.fetchData[props.lang].strings[20]}</option>
                        <option value="5vw" selected={props.options.titlesSize == '5vw' ? true : false}>{props.fetchData[props.lang].strings[21]}</option>
                        <option value="6vw" selected={props.options.titlesSize == '6vw' ? true : false}>{props.fetchData[props.lang].strings[22]}</option>
                    </select>
                </div>

                <div class="input-group mt-2" dir={`${props.lang == 'en' ? 'ltr' : 'rtl'}`}>
                    <div class="input-group-prepend">
                        <label class="input-group-text" style={{borderRadius: `${props.lang == 'en' ? '3px 0 0 3px' : '0 3px 3px 0'}`}} for="inputGroupSelect03">{props.fetchData[props.lang].strings[33]}</label>
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
            <div className="d-flex justify-content-between w-75 mt-2" style={{transform: 'translateX(17%)'}}>
                <img className="user-select-none" src={placeholderImg} style={{width: props.options.imagesSize, transition: '1s'}}/>
                <div className="h5 user-select-none" style={{fontSize: props.options.titlesSize, transition: '1s'}}><span className="px-2" style={{backgroundColor: '#d0d0d0'}}>{props.fetchData[props.lang].strings[25]}</span></div>
            </div>
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