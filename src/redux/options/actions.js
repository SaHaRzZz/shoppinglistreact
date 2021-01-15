import {SET_IMAGES_SIZE, SET_TITLES_SIZE, SET_LANGAUGE} from './types';

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

export const setLangauge = lang => {
    return {
        type: SET_LANGAUGE,
        payload: lang
    }
}