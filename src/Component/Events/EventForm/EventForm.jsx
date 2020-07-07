import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import {connect} from 'react-redux'
import {creatEvent, updateEvent} from '../../../redux/Event/EventActions'
import cuid from 'cuid'

class EventForm extends React.Component {
  state = {...this.props.event};
  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent,
      });
    }
  }
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`)
    } else {
      const newEvent={
        ...this.state,
        id : cuid(),
        hostPhotoURL : "/assets/images/user.png"
      }
      this.props.creatEvent(newEvent);
      this.props.history.push('/events')
    }
  };
  render() {
    const { title, date, city, venue, hostedBy, description } = this.state;
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input
              onChange={this.handleChange}
              value={title}
              placeholder="Event Name"
              name="title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              onChange={this.handleChange}
              value={date}
              type="date"
              name="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              onChange={this.handleChange}
              value={city}
              placeholder="City event is taking place"
              name="city"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              onChange={this.handleChange}
              value={venue}
              placeholder="Enter the Venue of the event"
              name="venue"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              onChange={this.handleChange}
              value={hostedBy}
              placeholder="Enter the name of person hosting"
              name="hostedBy"
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              onChange={this.handleChange}
              value={description}
              placeholder="Describe the event"
              name="description"
            />
          </Form.Field>
          <Button onClick={this.handleSubmit} positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
const mapStateToProps =({event:{events}}, ownProps ) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
    description: "",
  };
  if (eventId && events.length >0) {
    event = events.filter((event) => event.id === eventId)[0];
  }
  return {
    event
  };
};
const action={
  creatEvent,
  updateEvent
}
export default connect(mapStateToProps,action)(EventForm);



// const EventForm = ({ handleForm, createNewEvent, selectedEvent,handleUpadateEvent }) => {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [city, setCity] = useState("");
//   const [venue, setVenue] = useState("");
//   const [hostedBy, setHostedBy] = useState("");

//   useEffect(() => {
//     if (selectedEvent !== null) {
//       setHostedBy(selectedEvent.hostedBy);
//       setCity(selectedEvent.city);
//       setDate(selectedEvent.date);
//       setTitle(selectedEvent.title);
//       setVenue(selectedEvent.venue);
//     }
//   }, [selectedEvent]);
//   const handleSubmit = (e) => {
//     e.preventDefault();

//       handleUpadateEvent({ title, date, city, venue, hostedBy });

//       createNewEvent({ title, date, city, venue, hostedBy });

//   };

//   return (
//     <Segment>
//       <Form onSubmit={handleSubmit}>
//         <Form.Field>
//           <label>Event Title</label>
//           <input
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             placeholder="Event Name"
//             name="eventName"
//           />
//         </Form.Field>
//         <Form.Field>
//           <label>Event Date</label>
//           <input
//             onChange={(e) => setDate(e.target.value)}
//             value={date}
//             type="date"
//             name="date"
//             placeholder="Event Date"
//           />
//         </Form.Field>
//         <Form.Field>
//           <label>City</label>
//           <input
//             onChange={(e) => setCity(e.target.value)}
//             value={city}
//             placeholder="City event is taking place"
//             name="city"
//           />
//         </Form.Field>
//         <Form.Field>
//           <label>Venue</label>
//           <input
//             onChange={(e) => setVenue(e.target.value)}
//             value={venue}
//             placeholder="Enter the Venue of the event"
//             name="venue"
//           />
//         </Form.Field>
//         <Form.Field>
//           <label>Hosted By</label>
//           <input
//             onChange={(e) => setHostedBy(e.target.value)}
//             value={hostedBy}
//             placeholder="Enter the name of person hosting"
//             name="hostedBy"
//           />
//         </Form.Field>
//         <Button positive type="submit">
//           Submit
//         </Button>
//         <Button onClick={handleForm} type="button">
//           Cancel
//         </Button>
//       </Form>
//     </Segment>
//   );
// };

// export default EventForm;
