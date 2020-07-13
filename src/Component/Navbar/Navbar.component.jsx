import React from "react";
import { Menu, Container, Button, Dropdown, Image } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../redux/Modal/ModelAction";
import { logOut } from "../../redux/User/UserAction";
// import SignedOutMenu from "./Navbar-Menus/Singout";
// import SignedInMenu from "./Navbar-Menus/Singin";

const Navbar = ({ openModal, logOut, authenticated, currentUser }) => {
  const hondleSignIn = () => openModal("LoginModal");
  const handleSignOut = () => logOut();
  const handleRegister = () => openModal("RegisterModal");

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={Link} to="/" header>
          <img src="/assets/logo.png" alt="logo" />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        <Menu.Item as={NavLink} to="/test" name="Test" />
        {authenticated && <Menu.Item as={NavLink} to="/people" name="People" />}
        {!authenticated && (
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
        )}
        {authenticated ? (
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
        ) : (
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
        )}
      </Container>
    </Menu>
  );
};
const actions = {
  openModal,
  logOut,
};
const mapStateToProps = ({ user }) => ({
  
  authenticated: user.authenticated,
});

export default connect(mapStateToProps, actions)(Navbar);
