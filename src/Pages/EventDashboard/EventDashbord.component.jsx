import React from "react";
import { Grid, Header } from "semantic-ui-react";
import EventList from "../../Component/Events/EventList/EventList.component";
import { connect } from "react-redux";
import cuid from "cuid";
import {
  creatEvent,
  updateEvent,
  deleteEvent,
} from "../../redux/Event/EventActions";

class EventDashboard extends React.Component {
  handleUpadateEvent = (upadatedEvent) => {
    this.props.updateEvent(upadatedEvent);
  };

  handleNewEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/images/user.png";
    this.props.creatEvent(newEvent);
  };
  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  };
  render() {
    const { events } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList events={events} handleDelete={this.handleDeleteEvent} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h2" color="green">
              Activity Feed
            </Header>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const actions = {
  creatEvent,
  updateEvent,
  deleteEvent,
};
const mapSateToProps = ({ event: { events } }) => ({
  events,
});

export default connect(mapSateToProps, actions)(EventDashboard);
