import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../../Form/FormInput' ;

const RegisterForm = () => {
  return (
    <div>
      <Form size="large">
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
          <Button fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default reduxForm({form : 'RegisterForm'}) (RegisterForm);