import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventAttendanceList from "../EventAttedenceList/EventAttendenceList.component";
import { Link } from "react-router-dom";
const EventListItem = ({ event,  handleDelete }) => {
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
            Object.values(attendees).map((attendee,index) => (
              <EventAttendanceList attendee={index} key={attendee.id} />
            ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{description}</span>
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color="teal"
          floated="right"
          content="View"
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
