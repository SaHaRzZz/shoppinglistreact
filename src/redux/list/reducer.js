import {ADD_ITEM_TO_LIST, REMOVE_ITEM_FROM_LIST, CREATE_ITEM_IN_LIST, RESET_ITEM_FROM_LIST, SET_LIST, SET_NOTE} from './types';

const initialState = {}

const reducer = (state = initialState, action) => {
    if(state)
    switch(action.type) {
        case ADD_ITEM_TO_LIST: return {
            ...state,
            [action.item]: [state[action.item][0] + 1, state[action.item][1]]
        }
        case REMOVE_ITEM_FROM_LIST: return {
            ...state,
            [action.item]: [state[action.item][0] - 1, state[action.item][1]]
        }
        case CREATE_ITEM_IN_LIST: return {
            ...state,
            [action.item]: [1, '']
        }
        case RESET_ITEM_FROM_LIST: return {
            ...state,
            [action.item]: ''
        }
        case SET_LIST: return {
            ...action.payload
        }
        case SET_NOTE: return {
            ...state,
            [action.item]: [state[action.item][0], action.payload]
        }
        default: return state;
    }
}

export default reducer;