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
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer} from 'redux-firestore'


export default combineReducers({
    firebase: firebaseReducer,
    firestore:firestoreReducer,
    test: TestReducer,
    form: FormReducer,
    event: EventReducer,
    modal: ModalReducer,
    user: UserReducer,
    toastr: ToastrReducer
})