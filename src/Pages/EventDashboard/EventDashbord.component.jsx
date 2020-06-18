import React from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../../Component/Events/EventList/EventList.component";
import EventForm from "../../Component/Events/EventForm/EventForm";
import cuid from "cuid";

const dashboardEvents = [
  {
    id: "1",
    title: "Party In Theatro And Free Drinks ",
    date: "2020-07-17",
    category: "culture",
    description:
      "this is the Most Beautiful Party in The Tomsk,There Will Be a Great Discount For All Drinks  ",
    city: "Tomsk, Russia",
    venue: "Lenina Street Block No 22, Russia, Tomsk",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip From Tomsk To Krasnodar",
    date: "2020-09-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Tomsk, Russia",
    venue: "Frunze Avenue, 90, Russia, Tomsk",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
];

class EventDashboard extends React.Component {
  state = {
    events: dashboardEvents,
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
export default EventDashboard;
