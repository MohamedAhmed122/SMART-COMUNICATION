import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventAttendanceList from "../EventAttedenceList/EventAttendenceList.component";
const EventListItem = ({ event, selectedEvent, handleDelete }) => {
  const {
    title,
    date,
    description,
    venue,
    hostedBy,
    hostPhotoURL,
    city,
    attendees,
  } = event;
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header as="a">{title}</Item.Header>
              <Item.Description>
                Hosted by <a href="#home">{hostedBy}</a>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {date} |
          <Icon name="marker" />
          {venue} {city}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendees &&
            attendees.map((attendee) => (
              <EventAttendanceList attendee={attendee} key={attendee.id} />
            ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{description}</span>
        <Button
          onClick={() => selectedEvent(event)}
          as="a"
          color="teal"
          floated="right"
          content="Update"
        />
        <Button
          onClick={handleDelete(event.id)}
          as="a"
          color="red"
          floated="right"
          content="Delete"
        />
      </Segment>
    </Segment.Group>
  );
};
export default EventListItem;
