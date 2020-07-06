import React from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../../Component/Events/EventList/EventList.component";
import EventForm from "../../Component/Events/EventForm/EventForm";
import { connect } from "react-redux";
import cuid from "cuid";
import {
  creatEvent,
  updateEvent,
  deleteEvent,
} from "../../redux/Event/EventActions";

class EventDashboard extends React.Component {
  state = {
    isOpened: false,
    selectedEvent: null,
  };

  handleSelect = (event) => {
    this.setState({
      selectedEvent: event,
      isOpened: true,
    });
  };
  handleFormOpen = () => {
    this.setState({
      isOpened: true,
      selectedEvent: null,
    });
  };
  handleFormClose = () => {
    this.setState({
      isOpened: false,
    });
  };

  handleUpadateEvent = (upadatedEvent) => {
    this.props.updateEvent(upadatedEvent);
    this.setState({
      isOpened: false,
      selectedEvent: null,
    });
  };

  handleNewEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/images/user.png";
    this.props.creatEvent(newEvent)
    this.setState(({
      isOpened: false,
    }));
  };
  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  };
  render() {
    const { events } = this.props;
    const { isOpened, selectedEvent } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList
              events={events}
              selectedEvent={this.handleSelect}
              handleDelete={this.handleDeleteEvent}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              onClick={this.handleFormOpen}
              positive
              content="Create Event"
            />
            {isOpened && (
              <EventForm
                key={selectedEvent ? selectedEvent : 0}
                createNewEvent={this.handleNewEvent}
                handleForm={this.handleFormClose}
                selectedEvent={selectedEvent}
                handleUpadateEvent={this.handleUpadateEvent}
              />
            )}
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
