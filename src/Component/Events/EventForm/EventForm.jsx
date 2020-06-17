import React, { useState } from "react";
import { Segment, Form, Button } from "semantic-ui-react";


const EventForm = ({ handleForm,createNewEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [hostedBy, setHostedBy] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewEvent({title,date,city,venue,hostedBy})
    setHostedBy("");
    setCity("");
    setDate("");
    setTitle("");
    setVenue("");

  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit} >
        <Form.Field>
          <label>Event Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Event Name"
            name="eventName"
          />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            name="date"
            placeholder="Event Date"
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="City event is taking place"
            name="city"
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            onChange={(e) => setVenue(e.target.value)}
            value={venue}
            placeholder="Enter the Venue of the event"
            name="venue"
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted By</label>
          <input
            onChange={(e) => setHostedBy(e.target.value)}
            value={hostedBy}
            placeholder="Enter the name of person hosting"
            name="hostedBy"
          />
        </Form.Field>
        <Button positive type="submit">
          Submit
        </Button>
        <Button onClick={handleForm} type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};

export default EventForm;

// class EventForm extends React.Component {
//   state = {
//     eventNmae: "",
//     date: "",
//     city: "",
//     venue: "",
//     hostedBy: "",
//   };
//   handleChange = e => {
//     const { value, name } = e.target;

//     this.setState({ [name]: value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.setState({
//       eventNmae: "",
//       date: "",
//       city: "",
//       venue: "",
//       hostedBy: "",
//     });
//   };
//   render() {
//     const { eventNmae, date, city, venue, hostedBy } = this.state;
//     const { handleForm } = this.props;
//     return (
//       <Segment>
//         <Form>
//           <Form.Field>
//             <label>Event Title</label>
//             <input
//               onChange={this.handleChange}
//               value={eventNmae}
//               placeholder="Event Name"
//               name="eventNmae"
//             />
//           </Form.Field>
//           <Form.Field>
//             <label>Event Date</label>
//             <input
//               onChange={this.handleChange}
//               value={date}
//               type="date"
//               name="date"
//               placeholder="Event Date"
//             />
//           </Form.Field>
//           <Form.Field>
//             <label>City</label>
//             <input
//               onChange={this.handleChange}
//               value={city}
//               placeholder="City event is taking place"
//               name="city"
//             />
//           </Form.Field>
//           <Form.Field>
//             <label>Venue</label>
//             <input
//               onChange={this.handleChange}
//               value={venue}
//               placeholder="Enter the Venue of the event"
//               name="venue"
//             />
//           </Form.Field>
//           <Form.Field>
//             <label>Hosted By</label>
//             <input
//               onChange={this.handleChange}
//               value={hostedBy}
//               placeholder="Enter the name of person hosting"
//               name="hostedBy"
//             />
//           </Form.Field>
//           <Button onClick={this.handleSubmit} positive type="submit">
//             Submit
//           </Button>
//           <Button onClick={handleForm} type="button">
//             Cancel
//           </Button>
//         </Form>
//       </Segment>
//     );
//   }
// }
// export default EventForm;
