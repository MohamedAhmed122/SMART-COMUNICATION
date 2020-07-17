import React, { Fragment } from "react";
import EventListItem from '../EventListItem/EventListItem.component'
const EventList = ({events,selectedEvent,handleDelete}) => (
  <Fragment>
      {
        events && events.map(event => <EventListItem event={event} key={event.id} handleDelete={handleDelete}  selectedEvent={selectedEvent}/>)
      }

  </Fragment>
);
export default EventList;
