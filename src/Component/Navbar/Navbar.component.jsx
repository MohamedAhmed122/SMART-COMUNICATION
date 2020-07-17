import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../redux/Modal/ModelAction";
import SignedOutMenu from "./Navbar-Menus/Singout";
import SignedInMenu from "./Navbar-Menus/Singin";
import { withFirebase} from 'react-redux-firebase'


class NavBar extends React.Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { user } = this.props;
    const authenticated = user.isLoaded && !user.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/images/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated && (
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
            <SignedInMenu
              user={user}
              signOut={this.handleSignOut}
            />
          ) : (
            <SignedOutMenu
              signIn={this.handleSignIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}
const actions = {
  openModal,
};

const mapState = (state) => ({
  user: state.firebase.auth,
});

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
