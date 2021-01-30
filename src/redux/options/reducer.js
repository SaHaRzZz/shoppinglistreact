import {SET_IMAGES_SIZE, SET_TITLES_SIZE, SET_LANGAUGE} from './types';

const initialState = {
    imagesSize: '64px',
    titlesSize: '4vw',
    lang: '',
    appVersion: 10.1
};

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
        case SET_LANGAUGE: return {
            ...state,
            lang: action.payload
        }
        default: return state;
    }
}

export default reducer;