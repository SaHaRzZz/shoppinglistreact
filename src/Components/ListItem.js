import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addItemToList, removeItemFromList, createItemInList, resetItemFromList, setNote} from '../redux/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle, faMinusCircle, faStickyNote} from '@fortawesome/free-solid-svg-icons';
import {faStickyNote as farStickyNote} from '@fortawesome/free-regular-svg-icons';
import Popup from 'reactjs-popup';
import '../../node_modules/reactjs-popup/dist/index.css';
import {sharedListPost} from './MainList';
// import axios from 'axios';

import placeholderImg from '../imgs/_400.png';

// const AnalyticsPut = (item, fetchData) => {
//     axios.put(`${fetchData.general.server}/analytics`, item);
// }

const itemAdd = (id, list, addItemToListFunc, createItemInListFunc, apiID, isOnline, fetchData) => {
    if(list[id]) {
        if(list[id][0] == 80) {
            alert('מקסימום 80 יחידות למוצר!');
        }
        else {
            addItemToListFunc(id);
            if(isOnline) {
                sharedListPost(apiID, {...list, [id]: [list[id][0] + 1, list[id][1]]}, fetchData);
            }
            // AnalyticsPut({id}, fetchData);
        }
    }
    else {
        createItemInListFunc(id);
        if(isOnline) {
            sharedListPost(apiID, {...list, [id]: [1, '']}, fetchData);
        }
        // AnalyticsPut({id}, fetchData);
    }
}

const itemRemove = (id, list, removeItemFromListFunc, resetItemFromListFunc, apiID, isOnline, fetchData) => {
    if(list[id][0] == 1) {
        resetItemFromListFunc(id);
        if(isOnline) {
            sharedListPost(apiID, {...list, [id]: ''}, fetchData);
        }
    }
    else if(list[id][0]) {
        removeItemFromListFunc(id);
        if(isOnline) {
            sharedListPost(apiID, {...list, [id]: [list[id][0] - 1, list[id][1]]}, fetchData);
        }
    }
}

const itemReset = (resetItemFromListFunc, id, apiID, isOnline, list, fetchData) => {
    resetItemFromListFunc(id);
    if(isOnline) {
        sharedListPost(apiID, {...list, [id]: ''}, fetchData);
    }
}

const modifyNote = (setNote, id, content, apiID, isOnline, list, fetchData) => {
    setNote(id, content);
    if(isOnline) {
        sharedListPost(apiID, {...list, [id]: [list[id][0], content]}, fetchData);
    }
}

const numToFont = num => {
    switch(num) {
        case 0: {return 'A'};
        case 1: {return 'B'};
        case 2: {return 'C'};
        case 3: {return 'D'};
        case 4: {return 'E'};
        case 5: {return 'F'};
        case 6: {return 'G'};
        case 7: {return 'H'};
        case 8: {return 'I'};
        case 9: {return 'J'};
        case 10: {return 'K'};
        case 11: {return 'L'};
        case 12: {return 'M'};
        case 13: {return 'N'};
        case 14: {return 'O'};
        case 15: {return 'P'};
        case 16: {return 'Q'};
        case 17: {return 'R'};
        case 18: {return 'S'};
        case 19: {return 'T'};
        case 20: {return 'U'};
        case 21: {return 'V'};
        case 22: {return 'W'};
        case 23: {return 'X'};
        case 24: {return 'Y'};
        case 25: {return 'Z'};
        case 26: {return '8'};
        case 27: {return '9'};
        case 28: {return ':'};
        case 29: {return ';'};
        case 30: {return '<'};
        case 31: {return '='};
        case 32: {return 'a'};
        case 33: {return 'b'};
        case 34: {return 'c'};
        case 35: {return 'd'};
        case 36: {return 'e'};
        case 37: {return 'f'};
        case 38: {return 'g'};
        case 39: {return 'h'};
        case 40: {return 'i'};
        case 41: {return 'j'};
        case 42: {return 'k'};
        case 43: {return 'l'};
        case 44: {return 'm'};
        case 45: {return 'n'};
        case 46: {return 'o'};
        case 47: {return 'p'};
        case 48: {return 'q'};
        case 49: {return 'r'};
        case 50: {return 's'};
        case 51: {return 't'};
        case 52: {return 'u'};
        case 53: {return 'v'};
        case 54: {return 'w'};
        case 55: {return 'x'};
        case 56: {return 'y'};
        case 57: {return 'z'};
        case 58: {return '4'};
        case 59: {return '5'};
        case 60: {return '6'};
        case 61: {return '7'};
        case 62: {return '!'};
        case 63: {return '"'};
        case 64: {return '#'};
        case 65: {return '$'};
        case 66: {return '%'};
        case 67: {return '&'};
        case 68: {return "'"};
        case 69: {return '('};
        case 70: {return ')'};
        case 71: {return '*'};
        case 72: {return '+'};
        case 73: {return ','};
        case 74: {return '-'};
        case 75: {return '.'};
        case 76: {return '/'};
        case 77: {return '0'};
        case 78: {return '1'};
        case 79: {return '2'};
        case 80: {return '3'};
    }
}

function ListItem(props) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="card flex-row my-1 shadow text-center" style={{backgroundColor: props.list[props.id] ? "rgb(0, 0, 255, 0.5)" : "rgb(255, 0, 0, 0.5)"}}>
            <div className="card-header border-0">
                <img src={placeholderImg} onError={e => e.target.src = placeholderImg} onLoad={() => setImageLoaded(true)} className="user-select-none" style={{width: props.options.imagesSize, display: imageLoaded ? 'none' : 'block'}}/>
                <img src={`${props.fetchData.general.images}${props.logo}`} onError={e => e.target.src = placeholderImg} className="user-select-none" style={{width: props.options.imagesSize, display: imageLoaded ? 'block' : 'none'}}/>
            </div>
            <div className="card-body row p-0 m-0 text-wrap">
                <div className="card-title text-decoration-underline font-weight-bold col-5 h5 m-0 user-select-none align-self-center text-capitalize" style={{fontSize: props.options.titlesSize}}>{props.title}</div>
                
                {props.list[props.id] ? [
                    <div className="align-self-center">
                        <div className="col-1" style={{zIndex: 3}} onClick={() => itemAdd(props.id, props.list, props.addItemToList, props.createItemInList, props.apiID, props.isOnline, props.fetchData)}><FontAwesomeIcon size="2x" icon={faPlusCircle}/></div>
                        <div className="col-1" style={{zIndex: 3}} onClick={() => itemRemove(props.id, props.list, props.removeItemFromList, props.resetItemFromList, props.apiID, props.isOnline, props.fetchData)}><FontAwesomeIcon size="2x" icon={faMinusCircle}/></div>
                    </div>,
                    <div className="mx-2 font-italic user-select-none align-self-center" style={{fontSize: "2rem", zIndex: 3, fontFamily: 'numberpile'}} onClick={() => window.confirm("לאפס את המוצר?") && itemReset(props.resetItemFromList, props.id, props.apiID, props.isOnline, props.list, props.fetchData)}>{numToFont(props.list[props.id][0])}</div>,
                    <Popup trigger={<div className="align-self-center mx-2" style={{zIndex: 4}}><FontAwesomeIcon icon={props.list[props.id][1] ? faStickyNote : farStickyNote} size="2x"/></div>} position="left center">
                        <div className="text-center">
                            <div className="font-weight-bold">{props.title}</div>
                            <div dir={`${props.options.lang == 'en' ? 'ltr' : 'rtl'}`}>{props.list[props.id][1]}</div>
                            {props.list[props.id][1] ? [
                                <button className="btn btn-primary rounded-0" onClick={() => modifyNote(props.setNote, props.id, prompt(`הערה ל${props.title}:`, props.list[props.id][1]), props.apiID, props.isOnline, props.list, props.fetchData)}>שנה</button>,
                                <button className="btn btn-danger rounded-0" onClick={() => modifyNote(props.setNote, props.id, '', props.apiID, props.isOnline, props.list, props.fetchData)}>מחק</button>
                            ]
                            :
                            <button className="btn btn-primary rounded-0" onClick={() => modifyNote(props.setNote, props.id, prompt(`הערה ל${props.title}:`), props.apiID, props.isOnline, props.list, props.fetchData)}>הכן הערה</button>}
                        </div>
                    </Popup>
                    
                ]
            :
            ''}
                <div className="text-center h5 font-italic align-self-center">
                    {props.list[props.id] ? [
                        ''
                    ]
                    :
                    <div className="rounded-circle shadow-lg col-1 font-italic mx-2">
                        <div className="mr-2 position-absolute" style={{transform: "translate(-50%, -40%)"}} onClick={() => itemAdd(props.id, props.list, props.addItemToList, props.createItemInList, props.apiID, props.isOnline, props.fetchData)}><FontAwesomeIcon size="2x"  icon={faPlusCircle}/></div>
                    </div>}
                </div>
                <div className="card-title h-100 text-muted m-0 user-select-none align-self-center position-absolute text-capitalize" style={{right: '10px'}}>{props.category}</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.list,
        options: state.options,
        isOnline: state.api.isOnline,
        apiID: state.api.id,
        fetchData: state.api.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToList: val => dispatch(addItemToList(val)),
        removeItemFromList: val => dispatch(removeItemFromList(val)),
        createItemInList: val => dispatch(createItemInList(val)),
        resetItemFromList: val => dispatch(resetItemFromList(val)),
        setNote: (val1, val2) => dispatch(setNote(val1, val2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);