import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from './types';

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

export const fetch = () => {
    return function(dispatch) {
        axios.get('https://raw.githubusercontent.com/SaHaRzZz/test/main/json/Data.json')
             .then(response => dispatch(fetchSuccess(response.data.food)))
             .catch(error => dispatch(fetchFailure(error.message)));
    }
}