import React from 'react';
import {connect} from 'react-redux';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

import {setImagesSize, setTitlesSize, setLangauge, setLastConnected, setFilterText, setListLength} from '../redux/';
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
    props.setFilterText('');
    return (
        <div className="text-center">
            <Link to="/ShoppingListReact">
                <FontAwesomeIcon type="button" icon={faHome} size="4x" className="position-absolute border-right border-bottom" style={{left: 0, zIndex: 1}}/>
            </Link>
            <img type="button" onClick={() => changeLangauge(props.setLangauge, props.lang == 'en' ? 'he' : 'en')} src={props.lang == 'en' ? enFlag : heFlag} className="position-absolute" style={{right: 0, zIndex: 1}}></img>
            <div className="mb-2">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {`${props.fetchData[props.lang].strings[23]}: ${props.options.imagesSize == '64px' ? props.fetchData[props.lang].strings[19] : props.options.imagesSize == '96px' ? props.fetchData[props.lang].strings[20] : props.fetchData[props.lang].strings[21]}`}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={() => makeSetImagesSize(props.setImagesSize, '64px')}>{props.fetchData[props.lang].strings[19]}</a>
                        <a className="dropdown-item" onClick={() => makeSetImagesSize(props.setImagesSize, '96px')}>{props.fetchData[props.lang].strings[20]}</a>
                        <a className="dropdown-item" onClick={() => makeSetImagesSize(props.setImagesSize, '128px')}>{props.fetchData[props.lang].strings[21]}</a>
                    </div>
                </div>
                <img className="user-select-none" src={placeholderImg} style={{width: props.options.imagesSize}}/>
            </div>
            <div className="my-2">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {`${props.fetchData[props.lang].strings[24]}: ${props.options.titlesSize == '2vw' ? props.fetchData[props.lang].strings[18] : props.options.titlesSize == '3vw' ? props.fetchData[props.lang].strings[19] : props.options.titlesSize == '4vw' ? props.fetchData[props.lang].strings[20] : props.options.titlesSize == '5vw' ? props.fetchData[props.lang].strings[21] : props.fetchData[props.lang].strings[22]}`}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        <a className="dropdown-item" onClick={() => makeSetTitlesSize(props.setTitlesSize, '2vw')}>{props.fetchData[props.lang].strings[18]}</a>
                        <a className="dropdown-item" onClick={() => makeSetTitlesSize(props.setTitlesSize, '3vw')}>{props.fetchData[props.lang].strings[19]}</a>
                        <a className="dropdown-item" onClick={() => makeSetTitlesSize(props.setTitlesSize, '4vw')}>{props.fetchData[props.lang].strings[20]}</a>
                        <a className="dropdown-item" onClick={() => makeSetTitlesSize(props.setTitlesSize, '5vw')}>{props.fetchData[props.lang].strings[21]}</a>
                        <a className="dropdown-item" onClick={() => makeSetTitlesSize(props.setTitlesSize, '6vw')}>{props.fetchData[props.lang].strings[22]}</a>
                    </div>
                </div>
                <div className="h5 user-select-none" style={{fontSize: props.options.titlesSize}}><span className="px-2" style={{backgroundColor: '#d0d0d0'}}>{props.fetchData[props.lang].strings[25]}</span></div>
            </div>
            <div className="my-2">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {`${props.fetchData[props.lang].strings[33]}: ${props.listLength}`}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                        <a className="dropdown-item" onClick={() => makeSetListLength(props.setListLength, 5)}>5</a>
                        <a className="dropdown-item" onClick={() => makeSetListLength(props.setListLength, 10)}>10</a>
                        <a className="dropdown-item" onClick={() => makeSetListLength(props.setListLength, 20)}>20</a>
                        <a className="dropdown-item" onClick={() => makeSetListLength(props.setListLength, 40)}>40</a>
                        <a className="dropdown-item" onClick={() => makeSetListLength(props.setListLength, 80)}>80</a>
                    </div>
                </div>
            </div>
            <div className="h2 font-weight-bold position-absolute border-top border-right m-0 user-select-none" style={{bottom: 0}}>V-{props.options.appVersion}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        options: state.options,
        lang: state.options.lang,
        fetchData: state.api.data,
        listLength: state.filtering.listLength
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setImagesSize: val => dispatch(setImagesSize(val)),
        setTitlesSize: val => dispatch(setTitlesSize(val)),
        setLangauge: val => dispatch(setLangauge(val)),
        setLastConnected: val => dispatch(setLastConnected(val)),
        setFilterText: val => dispatch(setFilterText(val)),
        setListLength: val => dispatch(setListLength(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);