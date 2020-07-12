import React, { useState } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../redux/Modal/ModelAction";
import SignOut from "./Navbar-Menus/Singout";

import SignIn from "./Navbar-Menus/Singin";

const Navbar = ({ openModal }) => {
  const [authanticated, setAuthanticated] = useState(false);
  const hondleSignIn = () => openModal("LoginModal");
  const hondleSignOut = () => setAuthanticated(false);
  const handleRegister = () => openModal("RegisterModal");

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/images/Logo.png" alt="logo" />
          SMART COMUNICATIONS
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/events" name="Events" />
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
        {authanticated ? (
          <SignIn hondleSignOut={hondleSignOut} />
        ) : (
          <SignOut
            hondleSignIn={hondleSignIn}
            handleRegister={handleRegister}
          />
        )}
      </Container>
    </Menu>
  );
};
const actions = {
  openModal,
};
export default withRouter(connect(null, actions)(Navbar));
