import React, { Fragment } from "react";
import { Segment, Item, Label } from "semantic-ui-react";

const EventSideBar = ({ attendees }) => (
  <Fragment>
    <Segment
      textAlign="center"
      style={{ border: "none" }}
      attached="top"
      secondary
      inverted
      color="teal"
    >
      {/* {attendees.length} {attendees.length > 1 ? 'People' : 'Person'} Going */}
      2 People Going
    </Segment>
    <Segment attached>
      <Item.Group divided>
        {attendees &&
          attendees.map((attendee) => (
            <Item key={attendee.id} style={{ position: "relative" }}>
              <Label
                style={{ position: "absolute" }}
                color="orange"
                ribbon="right"
              >
                Host
              </Label>
              <Item.Image
                size="tiny"
                src={attendee.photoURL || "/assets/user.png"}
              />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">{attendee.name}</Item.Header>
              </Item.Content>
            </Item>
          ))}
      </Item.Group>
    </Segment>
  </Fragment>
);

export default EventSideBar;
