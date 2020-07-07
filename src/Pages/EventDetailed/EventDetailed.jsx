import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetialedHeader from "../../Component/details/EventDetialHeader";
import EventDetialedInfo from "../../Component/details/EventDetialInfo";
import EventDetialedSideBar from "../../Component/details/EventDetialSidebar";
import EventDetialedChat from "../../Component/details/EventDetialChat";

import { connect } from "react-redux";


const EventDetailed = ({event}) => {
 
  return (
    <Grid>
      <Grid.Column width={10}>
        {<EventDetialedHeader events={event} />}
        <EventDetialedInfo events={event} />
        <EventDetialedChat events={event} /> 
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetialedSideBar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};
const mapSateToProps = ( {event:{events}}, ownProps ) => {
  const eventID =ownProps.match.params.id;

  let event ={}
  if(eventID && events.length >0){
    event =events.filter(event => event.id === eventID)[0]
  }
  return{
    event
  }
}
export default connect(mapSateToProps)(EventDetailed);
