import React from 'react';
import {connect} from 'react-redux';
import {addItemToList, removeItemFromList, createItemInList, resetItemFromList} from '../redux/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle, faPlusCircle, faMinusCircle, faMinus} from '@fortawesome/free-solid-svg-icons';

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
                <img src={`${API_IMG_SRC}${props.logo}`} className="user-select-none" style={{width: props.options.imagesSize}}/>
            </div>
            <div className="card-body row p-0 text-wrap">
                <div className="card-title text-decoration-underline font-weight-bold col-5 h5 m-0 user-select-none align-self-center" style={{fontSize: props.options.titlesSize}}>{props.title}</div>
                <div className="col-1 mr-2" style={{transform: "translateY(40%)"}}><FontAwesomeIcon onClick={() => itemAdd(props.id, props.list, props.addItemToList, props.createItemInList)} icon={faPlusCircle}/></div>
                <div className="text-center h5 font-italic border-left border-right m-0 align-self-center">
                    {props.list[props.id] ? [
                        <button className="btn rounded-circle shadow-lg font-italic mx-2" style={{backgroundColor: "rgb(0, 0, 255, 0.5)", fontSize: "1.1rem"}} onClick={() => window.confirm("לאפס את המוצר?") && props.resetItemFromList(props.id)}><FontAwesomeIcon icon={faTimesCircle}/><br/>{props.list[props.id]}</button>,
                    ]
                    :
                    <div className="rounded-circle shadow-lg col-1 font-italic mx-2" style={{fontSize: "1.1rem"}}>0</div>}
                </div>
                <div className="col-1 ml-2" style={{transform: "translateY(40%)"}}><FontAwesomeIcon className={`${!props.list[props.id] ? 'd-none' : ''}`} onClick={() => itemRemove(props.id, props.list, props.removeItemFromList)} icon={faMinusCircle}/></div>
                <div className="card-title h-100 text-muted m-0 user-select-none align-self-center position-absolute" style={{right: '10px'}}>{props.category}</div>
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