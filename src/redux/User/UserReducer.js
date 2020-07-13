import {
    SIGN_OUT_USER,
    LOGIN_USER
} from './UserTypes'

const INITIALSTATE = {
    authenticated: false,
    currentUser: null
}

const UserReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                authenticated: true,
                 currentUser: action.payload.email
            }
            case SIGN_OUT_USER:
                return {
                    ...state,
                    authenticated: false,
                        currentUser: null
                }
                default:
                    return {
                        state
                    }
    }
}
export default UserReducer;