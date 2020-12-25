import {SET_TEXT_TO_FILTER, SET_TYPE_TO_FILTER, SET_TYPE_TO_FILTER_HEBREW, SET_CATEGORY_TO_FILTER, SET_CATEGORY_TO_FILTER_HEBREW, SET_FINAL, SET_FINAL_HEBREW} from './types';

const initialState = {
    filterText: '',
    filterType: 'FILTERING_TYPE_WHOLE',
    filterTypeHebrew: 'שם מדויק',
    filterCategoryHebrew: 'הכל',
    filterCategory: 'הכל',
    final: false,
    finalHebrew: 'הכנת רשימה סופית'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TEXT_TO_FILTER: return {
            ...state,
            filterText: action.payload
        }
        case SET_TYPE_TO_FILTER: return {
            ...state,
            filterType: action.payload
        }
        case SET_TYPE_TO_FILTER_HEBREW: return {
            ...state,
            filterTypeHebrew: action.payload
        }
        case SET_CATEGORY_TO_FILTER: return {
            ...state,
            filterCategory: action.payload
        }
        case SET_CATEGORY_TO_FILTER_HEBREW: return {
            ...state,
            filterCategoryHebrew: action.payload
        }
        case SET_FINAL: return {
            ...state,
            final: action.payload
        }
        case SET_FINAL_HEBREW: return {
            ...state,
            finalHebrew: action.payload
        }
        default: return state;
    }
}

export default reducer;