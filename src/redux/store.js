import {
    createStore,
    applyMiddleware
} from 'redux';

import RootReducer from './rootReducer';

import logger from 'redux-logger';

const middlware = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlware));




