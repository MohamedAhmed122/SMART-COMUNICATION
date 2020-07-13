import {
    createStore,
    applyMiddleware
} from 'redux';

import RootReducer from './rootReducer';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlware = [logger,thunk];

export const store = createStore(RootReducer, applyMiddleware(...middlware));




