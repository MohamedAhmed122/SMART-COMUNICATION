export const creatEvent=(event)=>{
    return{
        type:'CREATE_EVENT',
        payload: event
    }
}

export const updateEvent = event=>({
    type: "UPDATE_EVENT",
    payload:event
})

export const deleteEvent =(eventId)=>({
    type: "DELETE_EVENT",
    payload: eventId
})