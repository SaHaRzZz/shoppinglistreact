import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

import {setImagesSize, setTitlesSize} from '../redux/';
import {API_IMG_SRC} from './ListItem';

const makeSetImagesSize = (setImagesSizeFunc, payload) => {
    setImagesSizeFunc(payload);
    localStorage.setItem('options-images-size', payload);
}

const makeSetTitlesSize = (setTitlesSizeFunc, payload) => {
    setTitlesSizeFunc(payload);
    localStorage.setItem('options-titles-size', payload);
}

export const updateOptions = (setImagesSizeFunc, setTitlesSizeFunc) => {
    if(localStorage.getItem('options-images-size'))
        setImagesSizeFunc(localStorage.getItem('options-images-size'));
    if(localStorage.getItem('options-titles-size'))
        setTitlesSizeFunc(localStorage.getItem('options-titles-size'));
}

function Options(props) {
    return (
        <div className="text-center">
            <Link to="/ShoppingListReact">
                <FontAwesomeIcon type="button" icon={faHome} size="4x" className="position-absolute border-right border-bottom" style={{left: 0, zIndex: 1}}/>
            </Link>
            <div className="mb-2">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {`גודל תמונות: ${props.options.imagesSize == '64px' ? 'קטן' : props.options.imagesSize == '96px' ? 'בינוני' : 'גדול'}`}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={() => makeSetImagesSize(props.setImagesSize, '64px')}>קטן</a>
                        <a className="dropdown-item" onClick={() => makeSetImagesSize(props.setImagesSize, '96px')}>בינוני</a>
                        <a className="dropdown-item" onClick={() => makeSetImagesSize(props.setImagesSize, '128px')}>גדול</a>
                    </div>
                </div>
                <img src={`${API_IMG_SRC}_400.png`} style={{width: props.options.imagesSize}}/>
            </div>
            <div className="my-2">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {`גודל כותרות מוצר: ${props.options.titlesSize == '2vw' ? 'פיצי' : props.options.titlesSize == '3vw' ? 'קטן' : props.options.titlesSize == '4vw' ? 'בינוני' : props.options.titlesSize == '5vw' ? 'גדול' : 'ענק'}`}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        <a className="dropdown-item" onClick={() => makeSetTitlesSize(props.setTitlesSize, '2vw')}>פיצי</a>
                        <a className="dropdown-item" onClick={() => makeSetTitlesSize(props.setTitlesSize, '3vw')}>קטן</a>
                        <a className="dropdown-item" onClick={() => makeSetTitlesSize(props.setTitlesSize, '4vw')}>בינוני</a>
                        <a className="dropdown-item" onClick={() => makeSetTitlesSize(props.setTitlesSize, '5vw')}>גדול</a>
                        <a className="dropdown-item" onClick={() => makeSetTitlesSize(props.setTitlesSize, '6vw')}>ענק</a>
                    </div>
                </div>
                <div className="h5" style={{fontSize: props.options.titlesSize}}>כותרת לדוגמא</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        options: state.options
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setImagesSize: val => dispatch(setImagesSize(val)),
        setTitlesSize: val => dispatch(setTitlesSize(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);