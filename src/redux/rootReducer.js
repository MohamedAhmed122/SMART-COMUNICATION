import {
    combineReducers
} from 'redux';

import TestReducer from './Test/testReducer'
import EventReducer from './Event/EventReducer'

export default combineReducers({
    test: TestReducer,
    event: EventReducer
})