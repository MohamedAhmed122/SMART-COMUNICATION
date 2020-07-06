import EventState from './EventState';

const INITIAL_STATE = {
    events: EventState,
}

const EventReducer =(state =INITIAL_STATE ,action)=>{
    switch (action.type) {
        case "CREATE_EVENT":
            return{
                ...state,
                events:action.payload
            }
        case 'UPDATE_EVENT':
            return{
                ...state,
                events:action.payload.filter(event => event.id !== action.payload.event.id),
            }
        case 'DELETE_EVENT':
            return{
                ...state,
                events:action.payload.filter(event => event.id !==action.payload.eventId)
            }
    
        default:
            return state
    }
}
export default EventReducer;