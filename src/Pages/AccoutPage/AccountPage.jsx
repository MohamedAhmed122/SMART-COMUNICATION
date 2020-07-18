import React from "react";
import {
  Segment,
  Header,
  Form,
  Divider,
  Label,
  Button,
  Icon,
} from "semantic-ui-react";

import { Field, reduxForm } from "redux-form";
import {
  combineValidators,
  isRequired,
  composeValidators,
  matchesField,
} from "revalidate";
import FormInput from "../../Component/Form/FormInput";

const validate = combineValidators({
  newPassword1: isRequired({
    message: "Enter your new password, and dont forget it again asshole",
  }),
  newPassword2: composeValidators(
    isRequired({ message: "conform your new Password" }),
    matchesField("newPassword1")({ message: "Password doesnt match asshole" })
  )(),
});

  
const Account = ({ error, invalid, submitting, handleSubmit, updatePassword, providerId }) => {
  return (
    <Segment>
      <Header dividing size="large" content="Account" />
      {/* {providerId && providerId === 'password' &&  */}
      <div>
        <Header color="teal" sub content="Change password" />
        <p>Use this form to update your account settings</p>
        <Form onSubmit={handleSubmit(updatePassword)}>
          <Field
            width={8}
            name="newPassword1"
            type="password"
            pointing="left"
            inline={true}
            component={FormInput}
            basic={true}
            placeholder="New Password"
          />
          <Field
            width={8}
            name="newPassword2"
            type="password"
            inline={true}
            basic={true}
            pointing="left"
            component={FormInput}
            placeholder="Confirm Password"
          />
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Divider />
          <Button disabled={invalid || submitting} size="large" positive content="Update Password" />
        </Form>
      </div>
      {/* } */}

      {/* {providerId && providerId === 'facebook.com' &&  */}
      <Segment>
        <Header color="blue" sub content="Facebook Account" />
        <p>Please visit Facebook to update your account settings</p>
        <Button type="button" color="facebook">
          <Icon name="facebook" />
          Go to Facebook
        </Button>
      </Segment>
      {/* } */}

      {/* {providerId && providerId === 'google.com' &&  */}
      <Segment>
        <Header color="red" sub content="Google Account" />
        <p>Please visit Google to update your account settings</p>
        <Button type="button" color="google plus">
          <Icon name="google plus" />
          Go to Google
        </Button>
      </Segment>
       {/* } */}
    </Segment>
  );
};

export default reduxForm({ form: "account", validate })(Account);
