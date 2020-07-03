import React from "react";
import { Grid } from "semantic-ui-react";
import SettingNav from "../settingsNav/SettingNav";
import { Route, Redirect, Switch } from "react-router-dom";

import AboutPage from "../../../Pages/AboutPage/AboutPage";
import BasicPage from "../../../Pages/BasicPage/BasicPage";
import PhotosPage from "../../../Pages/PhotoPage/PhotoPage";
import AccountPage from "../../../Pages/AccoutPage/AccountPage";

const SettingsDashBoard = () => (
  <div>
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basics" />
          <Route path="/settings/basics" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" component={AccountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>
  </div>
);
export default SettingsDashBoard;
