import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field,reduxForm } from 'redux-form';
import FormInput from '../../Form/FormInput'

const LoginForm = () => {
  return (
    <Form error size="large">
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

export default reduxForm({form :'LoginForm'}) (LoginForm);