import {SET_TEXT_TO_FILTER, SET_TYPE_TO_FILTER, SET_TYPE_TO_FILTER_HEBREW, SET_CATEGORY_TO_FILTER, SET_CATEGORY_TO_FILTER_HEBREW, SET_FINAL, SET_FINAL_HEBREW} from './types';

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

export const setFilterTypeHebrew = type => {
    return {
        type: SET_TYPE_TO_FILTER_HEBREW,
        payload: type
    }
}

export const setFilterCategory = cat => {
    return {
        type: SET_CATEGORY_TO_FILTER,
        payload: cat
    }
}

export const setFilterCategoryHebrew = cat => {
    return {
        type: SET_CATEGORY_TO_FILTER_HEBREW,
        payload: cat
    }
}

export const setFinal = final => {
    return {
        type: SET_FINAL,
        payload: final
    }
}

export const setFinalHebrew = final => {
    return {
        type: SET_FINAL_HEBREW,
        payload: final
    }
}