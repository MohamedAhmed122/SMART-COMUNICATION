import React,{useState} from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

import SignOut from "./Navbar-Menus/Singout";

import SignIn from "./Navbar-Menus/Singin";

const Navbar = () => {
  const [authanticated, setAuthanticated]=useState(true)
 const  hondleSignIn=()=> setAuthanticated(true)
 const  hondleSignOut=()=> setAuthanticated(false)
  
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/images/Logo.png" alt="logo" />
          SMART COMUNICATIONS
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
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
        {authanticated? <SignIn hondleSignOut={hondleSignOut}  /> : <SignOut hondleSignIn={hondleSignIn}  />}
      </Container>
    </Menu>
  );
};
export default Navbar;
