import React, { Fragment } from "react";

import "./App.css";

import EventDashborad from "./Pages/EventDashboard/EventDashbord.component";
import HomePage from "./Pages/HomePage/HomePage";
import UserDetialedPage from "./Pages/userDetailedPage/userDetailed";
import EventDetailPage from "./Pages/EventDetailed/EventDetailed";
import EventForm from "./Component/Events/EventForm/EventForm";
import SettingsDashboard from "./Component/settings/settingsDashboard/settingsDashboard";
import TestArea from "./TestArea/TestArea";

import Navbar from "./Component/Navbar/Navbar.component";

import { Container } from "semantic-ui-react";

import { Route, withRouter, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <Navbar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashborad} />
                  <Route path="/events/:id" component={EventDetailPage} />
                  <Route path="/profile/:id" component={UserDetialedPage} />
                  <Route exact path={["/createEvent",'/manage/:id']} component={EventForm} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/test" component={TestArea} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
