import {SET_IMAGES_SIZE} from './types';

const initialState = {imagesSize: '96px'};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IMAGES_SIZE: return {
            ...state,
            imagesSize: action.payload
        }
        default: return state;
    }
}

export default reducer;