import React from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../../Component/Events/EventList/EventList.component";
import EventForm from "../../Component/Events/EventForm/EventForm";
import {connect} from 'react-redux'
import cuid from "cuid";



class EventDashboard extends React.Component {
  state = {
    events: this.props.events,
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
  // handleForm = () => {
  //   this.setState(({ isOpened }) => ({
  //     isOpened: !isOpened,
  //   }));
  // };
  handleUpadateEvent = (upadatedEvent) => {
    this.setState(({ events }) => ({
      events: events.map((event) => {
        if (event.id === upadatedEvent.id) {
          return { ...upadatedEvent };
        } else {
          return event;
        }
      }),
      isOpened: false,
      selectedEvent: null,
    }));
  };

  handleNewEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/images/user.png";
    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpened: false,
    }));
  };
  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    })
  }
  render() {
    const { isOpened, events, selectedEvent } = this.state;
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
const mapSateToProps=({event:{events}})=>({
  events
})

export default connect(mapSateToProps)(EventDashboard);
