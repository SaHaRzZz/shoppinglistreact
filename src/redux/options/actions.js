import {SET_IMAGES_SIZE, SET_TITLES_SIZE} from './types';

export const setImagesSize = size => {
    return {
        type: SET_IMAGES_SIZE,
        payload: size
    }
}

export const setTitlesSize = size => {
    return {
        type: SET_TITLES_SIZE,
        payload: size
    }
}