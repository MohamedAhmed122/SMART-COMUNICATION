import {
    SIGN_OUT_USER,
    LOGIN_USER
} from './UserTypes'

// const INITIALSTATE = {
//     authenticated: false,
//     currentUser: null
// }

// const UserReducer = (state = INITIALSTATE, action) => {
//     switch (action.type) {
//         case LOGIN_USER:
//             return {
//                 ...state,
//                 authenticated: true,
//                 currentUser: {
//                     email: action.payload.email,
//                   },
//             }
//             case SIGN_OUT_USER:
//                 return {
//                     ...state,
//                     authenticated: false,
//                         currentUser: null
//                 }
//                 default:
//                     return {
//                         state
//                     }
                    
//     }
// }
// export default UserReducer;
import { createReducer } from '../Reducer.utils'

const initialState = {
    currentUser: {},
    authenticated:false
}

export const loginUser = (state, payload) => {
    return {
        ...state,
        authenticated: true,
        currentUser: payload.email
    }
}

export const signOutUser = (state, payload) => {
    return {
        ...state,
        authenticated: false,
        currentUser: {}
    }
}

export default createReducer(initialState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signOutUser
})