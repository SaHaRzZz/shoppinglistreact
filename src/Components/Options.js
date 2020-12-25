import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

import {setImagesSize} from '../redux/';

const makeSetImagesSize = (setImagesSizeFunc, payload) => {
    setImagesSizeFunc(payload);
    localStorage.setItem('options-images-size', payload);
}

export const updateOptions = setImagesSizeFunc => {
    if(localStorage.getItem('options-images-size')) {
        setImagesSizeFunc(localStorage.getItem('options-images-size'));
        console.log('yes');
    }
    else {
        console.log('no');
    }
}

function Options(props) {
    useEffect(() => updateOptions(props.setImagesSize), []);
    console.log(props.options.imagesSize);
    return (
        <div className="text-center">
            <Link to="/">
                <FontAwesomeIcon type="button" icon={faHome} size="4x" className="position-absolute border-right border-bottom" style={{left: 0, zIndex: 1}}/>
            </Link>
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
        setImagesSize: val => dispatch(setImagesSize(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);