import React from 'react'
import { Form, Label } from 'semantic-ui-react'

const DescriptionInput =({ input, type,rows, placeholder, meta: { touched, error } })=>(
    <Form.Field error={touched && !!error}>
    <textarea type={type} placeholder={placeholder} {...input} rows={rows} />
    {touched && error ? (
      <Label basic color="red">
        {error}
      </Label>
    ) : null}
  </Form.Field>
)
export default DescriptionInput; 