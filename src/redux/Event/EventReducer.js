import dashboardEvents from './EventState'
import {
    CREATE_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT
} from './types'

const INITIAL_STATE = {events: dashboardEvents}




export default function eventReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
      case CREATE_EVENT:
        return {
          ...state,
          events: [...state.events, payload],
        };
      case UPDATE_EVENT:
        return {
          ...state,
          events: [
            ...state.events.filter((evt) => evt.id !== payload.id),
            payload,
          ],
        };
      case DELETE_EVENT:
        return {
          ...state,
          events: [...state.events.filter((evt) => evt.id !== payload)],
        };
      default:
        return state;
    }
  }


// const EventReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case "CREATE_EVENT":
//             return {
//                 ...state,
//                 events: action.payload
//             }
//             case 'UPDATE_EVENT':
//                 return {
//                     ...state,
//                     events: state.events.filter(event => event.id !== action.payload.event.id),
//                 }
//                 case "DELETE_EVENT":
//                     return {
//                         ...state,
//                         events: state.events.filter(event => event.id !== action.payload.eventId)
//                     }

//                     default:
//                         return state
//     }
// }


// export default EventReducer;