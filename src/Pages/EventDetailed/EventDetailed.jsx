import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetialedHeader from "../../Component/details/EventDetialHeader";
import EventDetialedInfo from "../../Component/details/EventDetialInfo";
import EventDetialedSideBar from "../../Component/details/EventDetialSidebar";
import EventDetialedChat from "../../Component/details/EventDetialChat";
const EventDetailed = () => (
  <Grid>
    <Grid.Column width={10}>
      <EventDetialedHeader />
      <EventDetialedInfo />
      <EventDetialedChat />
    </Grid.Column>
    <Grid.Column width={4}>
      <EventDetialedSideBar />
    </Grid.Column>
  </Grid>
);
export default EventDetailed;
