import React from "react";
import { Grid } from "semantic-ui-react";
import SettingNav from "../settingsNav/SettingNav";
import { Route, Redirect, Switch } from "react-router-dom";

import AboutPage from "../../../Pages/AboutPage/AboutPage";
import BasicPage from "../../../Pages/BasicPage/BasicPage";
import PhotosPage from "../../../Pages/PhotoPage/PhotoPage";
import AccountPage from "../../../Pages/AccoutPage/AccountPage";
import { connect } from "react-redux";
import { updatePassword ,UpdateUser} from "../../../redux/User/UserAction";

const SettingsDashBoard = ({ updatePassword, providerId,user,UpdateUser }) => (
  <div>
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basics" />
          <Route path="/settings/basics"render={()=> <BasicPage UpdateUser={UpdateUser} initialValues={user} />} />
          <Route path="/settings/about" render ={()=> <AboutPage UpdateUser={UpdateUser} initialValues={user} />} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route
            path="/settings/account"
            render={() => (
              <AccountPage
                providerId={providerId}
                updatePassword={updatePassword}
              />
            )}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>
  </div>
);

const actions = {
  updatePassword,
  UpdateUser,

};
const mapStateToProps = (state) => ({
  providerId:
    state.firebase.auth.isLoadeg &&
    state.firebase.auth.providerData[0].providerId,
  user: state.firebase.profile
});
export default connect(mapStateToProps, actions)(SettingsDashBoard);
