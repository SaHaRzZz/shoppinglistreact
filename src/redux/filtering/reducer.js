import {SET_TEXT_TO_FILTER, SET_TYPE_TO_FILTER, SET_CATEGORY_TO_FILTER, SET_FINAL} from './types';

const initialState = {
    filterText: '',
    filterType: false, //false == whole
    filterCategory: 0,
    final: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TEXT_TO_FILTER: return {
            ...state,
            filterText: action.payload
        }
        case SET_TYPE_TO_FILTER: return {
            ...state,
            filterType: action.payload
        }
        case SET_CATEGORY_TO_FILTER: return {
            ...state,
            filterCategory: action.payload
        }
        case SET_FINAL: return {
            ...state,
            final: action.payload
        }
        default: return state;
    }
}

export default reducer;