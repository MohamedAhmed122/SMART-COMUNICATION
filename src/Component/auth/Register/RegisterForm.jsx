import React from "react";
import { Form, Segment, Button, Label } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import FormInput from "../../Form/FormInput";
import { combineValidators, isRequired } from "revalidate";
import { register } from "../../../redux/User/UserAction";
// import { closeModal} from '../../../redux/Modal/ModelAction'
import { connect } from "react-redux";
import SocialLogin from "../SocialLogin/SocialLogin";

const validate = combineValidators({
  displayName: isRequired("displayName"),
  email: isRequired("email"),
  password: isRequired("password"),
});

const RegisterForm = ({
  register,
  handleSubmit,
  invalid,
  pristine,
  submitting,
  error,
}) => {
  return (
    <div>
      <Form onSubmit={handleSubmit(register)} size="large" autoComplete="off">
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={FormInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={FormInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={FormInput}
            placeholder="Password"
          />
          {error ? (
            <Label basic color="red">
              {error}
            </Label>
          ) : null}
          <Button
            disabled={invalid || submitting || pristine}
            fluid
            size="large"
            color="teal"
          >
            Register
          </Button>
        </Segment>
        <Segment>
          <SocialLogin />
        </Segment>
      </Form>
    </div>
  );
};

const actions = {
  register,
};
export default connect(
  null,
  actions
)(reduxForm({ form: "RegisterForm", validate })(RegisterForm));
