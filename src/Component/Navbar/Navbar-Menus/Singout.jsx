import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const SignOut =({hondleSignIn,handleRegister})=>(
    <Menu.Item position="right">
        <Button onClick={hondleSignIn} basic inverted content="Login" />
        <Button
          basic
          inverted
          onClick={handleRegister}
          content="Register"
          style={{ marginLeft: "0.5em" }}
        />
      </Menu.Item>
)
export default SignOut