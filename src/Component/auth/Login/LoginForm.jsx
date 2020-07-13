import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import FormInput from "../../Form/FormInput";
import { connect } from "react-redux";

import { login } from "../../../redux/User/UserAction";

const LoginForm = ({ login, handleSubmit }) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(login)} autoComplete="off">
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
