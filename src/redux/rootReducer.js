import {
    combineReducers
} from 'redux';

import {
    reducer as FormReducer
} from 'redux-form'
import {
    reducer as ToastrReducer,
} from 'react-redux-toastr'
import TestReducer from './Test/testReducer'
import EventReducer from './Event/EventReducer'
import ModalReducer from './Modal/ModalReducer'
import UserReducer from './User/UserReducer'


export default combineReducers({
    test: TestReducer,
    form: FormReducer,
    event: EventReducer,
    modal: ModalReducer,
    user: UserReducer,
    toastr: ToastrReducer
})