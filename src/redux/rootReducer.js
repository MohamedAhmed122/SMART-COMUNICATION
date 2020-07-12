import {
    combineReducers
} from 'redux';

import {
    reducer as FormReducer
} from 'redux-form'
import TestReducer from './Test/testReducer'
import EventReducer from './Event/EventReducer'
import ModalReducer from './Modal/ModalReducer'

export default combineReducers({
    test: TestReducer,
    form: FormReducer,
    event: EventReducer,
    modal: ModalReducer
})