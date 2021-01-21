import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, SET_ONLINE, SET_ID, SET_LAST_CONNECTED} from './types';

const initialState = {
    loading: true,
    data: '',
    error: '',
    isOnline: false,
    id: '',
    lastConnected: ''
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
        case SET_ONLINE: return {
            ...state,
            isOnline: action.payload
        }
        case SET_ID: return {
            ...state,
            id: action.payload
        }
        case SET_LAST_CONNECTED: return {
            ...state,
            lastConnected: action.payload
        }
        default: return state;
    }
}

export default reducer;