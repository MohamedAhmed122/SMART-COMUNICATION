import React from "react";
import { Form, Segment, Button, Label } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import FormInput from "../../Form/FormInput";
import { connect } from "react-redux";
import { login } from "../../../redux/User/UserAction";

const LoginForm = ({ login, handleSubmit, error }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)} autoComplete="off">
      <Segment>
        <Field
          name="email"
          component={FormInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={FormInput}
          type="password"
          placeholder="password"
        />
        {error ? (
          <Label basic color="red">
            {error}
          </Label>
        ) : null}

        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};
const actions = {
  login,
};

export default connect(
  null,
  actions
)(reduxForm({ form: "LoginForm" })(LoginForm));
