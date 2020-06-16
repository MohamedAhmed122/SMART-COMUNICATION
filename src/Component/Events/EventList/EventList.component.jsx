import React, { Fragment } from "react";
import EventListItem from '../EventListItem/EventListItem.component'
const EventList = ({events}) => (
  <Fragment>
      {
        events.map(event => <EventListItem event={event} key={event.id} />)
      }

  </Fragment>
);
export default EventList;
