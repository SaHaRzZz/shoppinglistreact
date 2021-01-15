import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from './types';

const initialState = {
    loading: true,
    data: '',
    error: ''
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
        default: return state;
    }
}

export default reducer;