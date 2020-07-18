import React from 'react'
import { Form, Label } from 'semantic-ui-react';

const RadionInput =({input ,width, type,label})=>(
    <Form.Field className='ui radio'>
        <input {...input} type={type} />
        <Label>{label}</Label>
    </Form.Field>
)
export default RadionInput;