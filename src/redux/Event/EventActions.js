import {
    CREATE_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT
} from './types'
import { toastr } from 'react-redux-toastr'

export const creatEvent = (event) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_EVENT,
                payload: event
            })
            toastr.success('Success!', 'Event Has Been Created')
        } catch (error) {
            toastr.error('Oops','Something Went Wrong!')
        }
    }

}

export const updateEvent = (event) => {
    return async dispatch => {
        try {
            dispatch({
                type: UPDATE_EVENT,
                payload: event
            })
            toastr.success('Success!', 'Event Has Been Created')
        } catch (error) {
            toastr.error('Oops','Something Went Wrong!')
        }
    }

}


export const deleteEvent = (eventId) => ({
    type: DELETE_EVENT,
    payload: eventId
})