import {SET_IMAGES_SIZE, SET_TITLES_SIZE} from './types';

const initialState = {imagesSize: '96px', titlesSize: '4vw'};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IMAGES_SIZE: return {
            ...state,
            imagesSize: action.payload
        }
        case SET_TITLES_SIZE: return {
            ...state,
            titlesSize: action.payload
        }
        default: return state;
    }
}

export default reducer;