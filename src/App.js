import React, {
  Fragment
} from "react";
import "./App.css";
import EventDashborad from './Pages/EventDashboard/EventDashbord.component'
import Navbar from "./Component/Navbar/Navbar.component";
import {
  Container
} from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <Fragment >
      <Navbar />
      <Container className='main'>
         <EventDashborad />
      </Container>
    </Fragment>
    );
  }
}

export default App;