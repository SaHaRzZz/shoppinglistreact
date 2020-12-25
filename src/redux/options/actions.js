import {SET_IMAGES_SIZE} from './types';

export const setImagesSize = size => {
    return {
        type: SET_IMAGES_SIZE,
        payload: size
    }
}