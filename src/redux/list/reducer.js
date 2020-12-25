import {ADD_ITEM_TO_LIST, REMOVE_ITEM_FROM_LIST, CREATE_ITEM_IN_LIST, RESET_ITEM_FROM_LIST, SET_LIST} from './types';

const initialState = {imageLoaded: 0}

const reducer = (state = initialState, action) => {
    if(state)
    switch(action.type) {
        case ADD_ITEM_TO_LIST: return {
            ...state,
            [action.item]: state[action.item] + 1
        }
        case REMOVE_ITEM_FROM_LIST: return {
            ...state,
            [action.item]: state[action.item] - 1
        }
        case CREATE_ITEM_IN_LIST: return {
            ...state,
            [action.item]: 1
        }
        case RESET_ITEM_FROM_LIST: return {
            ...state,
            [action.item]: 0
        }
        case SET_LIST: return {
            imageLoaded: state.imageLoaded,
            ...action.payload
        }
        default: return state;
    }
}

export default reducer;