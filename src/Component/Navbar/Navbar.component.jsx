import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link ,withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../redux/Modal/ModelAction";
import { logOut } from "../../redux/User/UserAction";
import SignedOutMenu from "./Navbar-Menus/Singout";
import SignedInMenu from "./Navbar-Menus/Singin";

// const Navbar = ({ openModal, logOut, authenticated, currentUser }) => {
//   const hondleSignIn = () => {
//     openModal("LoginModal");
//     login(currentUser);
//   };

//   const handleSignOut = () => logOut();

//   const handleRegister = () => openModal("RegisterModal");

//   console.log(authenticated);
//   console.log(currentUser);

//   return (
//     <Menu inverted fixed="top">
//       <Container>
//         <Menu.Item as={Link} to="/" header>
//           <img src="/assets/images/logo.png" alt="logo" />
//           Re-vents
//         </Menu.Item>
//         <Menu.Item as={NavLink} to="/events" name="Events" />
//         <Menu.Item as={NavLink} to="/people" name="People" />
//         <Menu.Item>
//           <Button
//             as={Link}
//             to="/createEvent"
//             floated="right"
//             positive
//             inverted
//             content="Create Event"
//           />
//         </Menu.Item>
//         {authenticated ? (
//           <SignedInMenu
//             handleSignOut={handleSignOut}
//             currentUser={currentUser}
//           />
//         ) : (
//           <SignedOutMenu
//             hondleSignIn={hondleSignIn}
//             handleRegister={handleRegister}
//           />
//         )}
//       </Container>
//     </Menu>
//   );
// };

// const actions = {
//   openModal,
//   logOut,
//   login,
// };
// const mapStateToProps = (state) => ({
//   authenticated: state.user.authenticated,
//   currentUser: state.user.currentUser,
// });

// export default connect(mapStateToProps, actions)(Navbar);
const actions = {
  openModal,
  logOut
}

const mapState = (state) => ({
  user: state.user
})

class NavBar extends React.Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.logOut();
    this.props.history.push('/')
  };

  render() {
    const { user } = this.props;
    const authenticated = user.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/images/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated &&
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>}
          {authenticated ? (
            <SignedInMenu currentUser={user.currentUser} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(connect(mapState, actions)(NavBar));