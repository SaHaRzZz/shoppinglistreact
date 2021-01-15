import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, SET_LANGAUGE} from './types';

const initialState = {
    loading: true,
    data: '',
    error: '',
    lang: 'en'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload,
            error: ''
        }
        case FETCH_FAILURE: return {
            ...state,
            loading: false,
            data: '',
            error: action.payload
        }
        case SET_LANGAUGE: return {
            ...state,
            lang: action.payload
        }
        default: return state;
    }
}

export default reducer;