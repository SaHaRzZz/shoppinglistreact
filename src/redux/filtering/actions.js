import {SET_TEXT_TO_FILTER, SET_TYPE_TO_FILTER, SET_CATEGORY_TO_FILTER, SET_FINAL} from './types';

export const setFilterText = text => {
    return {
        type: SET_TEXT_TO_FILTER,
        payload: text
    }
}

export const setFilterType = type => {
    return {
        type: SET_TYPE_TO_FILTER,
        payload: type
    }
}

export const setFilterCategory = cat => {
    return {
        type: SET_CATEGORY_TO_FILTER,
        payload: cat
    }
}

export const setFinal = final => {
    return {
        type: SET_FINAL,
        payload: final
    }
}