/* global google */

import React from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { creatEvent, updateEvent } from "../../../redux/Event/EventActions";
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan,
} from "revalidate";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import FormInput from "../../Form/FormInput";
import DescriptionInput from "../../Form/DescriptionInput";
import PlaceInput from "../../Form/PlaceInput";
// import PlacesAutocomplete from '../../LocationSearchInput/LocationSearchInput'
import SelectInput from "../../Form/SelectInput";
import cuid from "cuid";

const validate = combineValidators({
  title: isRequired({ message: "The event title is required" }),
  category: isRequired({ message: "Please provide a category" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters",
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date"),
});

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
];
class EventForm extends React.Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
  };
  onSubmitEvent = (values) => {
    values.venueLatLng= this.state.venueLatLng;
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/images/user.png",
        hostedBy: "Bob",
      };
      this.props.creatEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };
  handleCitySelected = (selectedCity) => {
    geocodeByAddress(selectedCity)
      .then((results) => getLatLng(results[0]))
      .then((latlng) => {
        this.setState({
          cityLatLng: latlng,
        });
      })
      .then(() => {
        this.props.change("city", selectedCity);
      });
  };

  handleVenueSelected = (selectedVenue) => {
    geocodeByAddress(selectedVenue)
      .then((results) => getLatLng(results[0]))
      .then((latlng) => {
        this.setState({
          venueLatLng: latlng,
        });
      })
      .then(() => {
        this.props.change("venue", selectedVenue);
      });
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      pristine,
      submitting,
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Form
              onSubmit={this.props.handleSubmit(this.onSubmitEvent)}
              autoComplete="off"
            >
              <Header sub color="teal" content="Event Details" />
              <Field
                name="title"
                component={FormInput}
                placeholder="Give your Event a name"
              />
              <Field
                name="category"
                component={SelectInput}
                options={category}
                placeholder="What is your event about?"
              />
              <Field
                name="description"
                component={DescriptionInput}
                rows={3}
                placeholder="Tell us about your event "
              />
              <Header sub content="Event Location details" color="teal" />
              <Field
                name="city"
                component={PlaceInput}
                placeholder="Event City"
                options={{ types: ["(cities)"] }}
                onSelect={this.handleCitySelected}
              />
              <Field
                name="venue"
                onSelect={this.handleVenueSelected}
                component={PlaceInput}
                options={{
                  types :['establishment'],
                   location: new google.maps.LatLng(this.state.cityLatLng),
                    radius: 2000
                  }}
                placeholder="Event venue"
              />

              <Field
                name="date"
                component={FormInput}
                type="date"
                placeholder="Event Date"
              />

              <Button
                disabled={invalid || submitting || pristine}
                onClick={this.handleSubmit}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push("/events")
                }
                type="button"
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
const mapStateToProps = ({ event: { events } }, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && events.length > 0) {
    event = events.filter((event) => event.id === eventId)[0];
  }
  return {
    initialValues: event,
  };
};
const action = {
  creatEvent,
  updateEvent,
};
export default connect(
  mapStateToProps,
  action
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
