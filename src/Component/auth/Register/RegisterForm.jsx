import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../../Form/FormInput' ;
import {closeModal} from '../../../redux/Modal/ModelAction'
import {connect} from 'react-redux'
const RegisterForm = ({closeModal}) => {
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
          <Field
            name="password"
            type="password"
            component={FormInput}
            placeholder="Confirm Password"
          />
          <Button onClick={closeModal} fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

const actions={
  closeModal
}
export default connect(null,actions) ( reduxForm({form : 'RegisterForm'}) (RegisterForm));