import React from "react";
import { List, Image } from "semantic-ui-react";

const EventAttendanceList = ({ attendee: { photoURL } }) => (
  <List.Item>
    <Image as="a" size="mini" circular src={photoURL}></Image>
  </List.Item>
);
export default EventAttendanceList;
