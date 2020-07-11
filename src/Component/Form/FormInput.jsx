import React from "react";
import { Form, Label } from "semantic-ui-react";

const FormInput = ({ input, type, placeholder, meta: { touched, error } }) => (
  <Form.Field error={touched && !!error}>
    <input type={type} placeholder={placeholder} {...input} />
    {touched && error ? (
      <Label basic color="red">
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

export default FormInput;
