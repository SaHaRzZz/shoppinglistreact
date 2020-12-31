import {ADD_ITEM_TO_LIST, REMOVE_ITEM_FROM_LIST, CREATE_ITEM_IN_LIST, RESET_ITEM_FROM_LIST, SET_LIST, SET_NOTE} from './types';

export const addItemToList = item => {
    return {
        type: ADD_ITEM_TO_LIST,
        item
    }
}

export const removeItemFromList = item => {
    return {
        type: REMOVE_ITEM_FROM_LIST,
        item
    }
}

export const createItemInList = item => {
    return {
        type: CREATE_ITEM_IN_LIST,
        item
    }
}

export const resetItemFromList = item => {
    return {
        type: RESET_ITEM_FROM_LIST,
        item
    }
}

export const setList = list => {
    return {
        type: SET_LIST,
        payload: list
    }
}

export const setNote = (item, note) => {
    return {
        type: SET_NOTE,
        item,
        payload: note
    }
}