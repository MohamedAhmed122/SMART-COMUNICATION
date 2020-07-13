import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignIn = ({ handleSignOut, currentUser }) => (
  <Menu.Item position="right">
    <Image avatar spaced="right" src="/assets/images/user.png" />
    <Dropdown pointing="top left" text={currentUser}>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus" />
        <Dropdown.Item text="My Events" icon="calendar" />
        <Dropdown.Item text="My Network" icon="users" />
        <Dropdown.Item text="My Profile" icon="user" />
        <Dropdown.Item
          as={Link}
          to="/settings"
          text="Settings"
          icon="settings"
        />
        <Dropdown.Item text="Sign Out" icon="power" onClick={handleSignOut} />
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Item>
);
export default SignIn;
