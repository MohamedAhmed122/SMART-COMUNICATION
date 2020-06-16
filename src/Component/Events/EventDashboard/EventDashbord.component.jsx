import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList.component";

const EventDashboard = () => (
  <div>
    <Grid>
      <Grid.Column width={10}>
        <EventList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>right side</h2>
      </Grid.Column>
    </Grid>
  </div>
);
export default EventDashboard;
