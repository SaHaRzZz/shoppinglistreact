import reduxThunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import filteringReducer from './filtering/reducer';
import apiReducer from './api/reducer';
import listReducer from './list/reducer';
import optionsReducer from './options/reducer';

const rootReducer = combineReducers({filtering: filteringReducer, api: apiReducer, list: listReducer, options: optionsReducer});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;