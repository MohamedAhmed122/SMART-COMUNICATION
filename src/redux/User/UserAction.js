
import {SIGN_OUT_USER,LOGIN_USER} from './UserTypes'
export const login =(creds)=>({
    type:LOGIN_USER,
    payload: creds
})

export const logOut =()=>({
    type : SIGN_OUT_USER
})