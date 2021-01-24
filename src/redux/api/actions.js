import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, SET_ONLINE, SET_ID, SET_LAST_CONNECTED} from './types';

import axios from 'axios';

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchSuccess = data => {
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
}

export const fetchFailure = error => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export const setOnline = bool => {
    return {
        type: SET_ONLINE,
        payload: bool
    }
}

export const setId = bool => {
    return {
        type: SET_ID,
        payload: bool
    }
}

export const setLastConnected = id => {
    return {
        type: SET_LAST_CONNECTED,
        payload: id
    }
}

export const fetch = () => {
    return function(dispatch) {
        axios.get('https://raw.githubusercontent.com/SaHaRzZz/test/main/json/Data.json', {timeout: 10000})
             .then(response => {
                let temp = response.data;
                temp = JSON.stringify(temp);
                localStorage.setItem('items-database', temp);
                return dispatch(fetchSuccess(response.data));
            })
             .catch(error => {
                 if(localStorage.getItem('items-database')) {
                     console.log(error.message);
                    let temp = localStorage.getItem('items-database');
                    temp = JSON.parse(temp);
                    return dispatch(fetchSuccess(temp));
                 }
                return dispatch(fetchFailure(error.message));
            });
    }
}