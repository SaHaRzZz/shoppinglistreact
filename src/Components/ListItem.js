import React from 'react';
import {connect} from 'react-redux';
import {addItemToList, removeItemFromList, createItemInList, resetItemFromList} from '../redux/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const API_IMG_SRC = 'https://raw.githubusercontent.com/SaHaRzZz/test/main/imgs/';

const itemAdd = (id, list, addItemToListFunc, createItemInListFunc) => {
    if(list[id]) {
        addItemToListFunc(id);
    }
    else {
        createItemInListFunc(id);
    }
}

const itemRemove = (id, list, removeItemFromListFunc) => {
    if(list[id]) {
        removeItemFromListFunc(id);
    }
}

function ListItem(props) {
    return (
        <div className="card flex-row my-1 shadow text-center" style={{backgroundColor: props.list[props.id] ? "rgb(0, 0, 255, 0.5)" : "rgb(255, 0, 0, 0.5)"}}>
            <div className="card-header border-0">
                <img src={`${API_IMG_SRC}${props.logo}`} className="user-select-none" style={{width: props.options.imagesSize}} onClick={() => itemAdd(props.id, props.list, props.addItemToList, props.createItemInList)}/>
            </div>
            <div className="card-body row p-0">
                <div className="card-title text-decoration-underline font-weight-bold col-5 position-absolute h5 m-0 user-select-none align-self-center">{props.title}</div>
                <div className="card-title text-decoration-underline font-weight-bold col-5 border-left m-0" onClick={() => itemAdd(props.id, props.list, props.addItemToList, props.createItemInList)}></div>
                <div className="col-3 text-center h5 font-italic border-left border-right m-0 align-self-center position-relative">
                    {props.list[props.id] ? [
                        <button className="btn rounded-circle shadow-lg" style={{backgroundColor: "rgb(0, 0, 255, 0.5)", fontSize: "1.1rem"}} onClick={() => window.confirm("לאפס את המוצר?") && props.resetItemFromList(props.id)}><FontAwesomeIcon icon={faTimesCircle}/>{props.list[props.id]}</button>,
                    ]
                    :
                    ''}
                </div>
                <div className="card-title mb-2 text-muted col-4 m-0 user-select-none align-self-center" onClick={() => itemRemove(props.id, props.list, props.removeItemFromList)}>{props.category}</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.list,
        options: state.options
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToList: val => dispatch(addItemToList(val)),
        removeItemFromList: val => dispatch(removeItemFromList(val)),
        createItemInList: val => dispatch(createItemInList(val)),
        resetItemFromList: val => dispatch(resetItemFromList(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);