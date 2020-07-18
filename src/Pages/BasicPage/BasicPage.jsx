import React, { Component } from "react";
import {
  Segment,
  Form,
  Header,
  Divider,
  Button,
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

import PlaceInput from "../../Component/Form/PlaceInput";
import FormInput from "../../Component/Form/FormInput";
import RadionInput from "../../Component/Form/RadioInput";


class BasicPage extends Component {
  render() {
    const { pristine, submitting,UpdateUser, handleSubmit } = this.props;
    return (
      <Segment>
        <Header dividing size="large" content="Basics" />
        <Form onSubmit={handleSubmit(UpdateUser)} autoComplete='off'>
          <Field
            width={8}
            name="displayName"
            type="text"
            component={FormInput}
            placeholder="Known As"
          />
          <Field
            name="city"
            placeholder="Home Town"
            options={{ types: ["(cities)"] }}
            label="Female"
            component={PlaceInput}
            width={8}
          />
          <Field
            width={8}
            name="date"
            type="date"
            component={FormInput}
            placeholder="Date of Birth"
          />

          <Form.Group inline>
            <label>Gender</label>
            <Field
              name="gender"
              type="radio"
              value="male"
              label="Male"
              component={RadionInput}
            />
            <Field
              name="gender"
              type="radio"
              value="female"
              label="Female"
              component={RadionInput}
            />
          </Form.Group>
          <Divider />
          <Button
            disabled={pristine || submitting}
            size="large"
            positive
            content="Update Profile"
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({ form: "Profile", enableReinitialize: true })(
  BasicPage
);
