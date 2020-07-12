import React from "react";
import { Button, Segment, Item, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const eventImageStyle = {
  filter: "brightness(30%)",
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};
const HeaderEvent = ({ events: { category, title, hostedBy, date,id } }) => (
  <Segment.Group>
    <Segment basic attached="top" style={{ padding: "0" }}>
      <Image
        style={eventImageStyle}
        src={`/assets/categoryImages/${category}.jpg`}
        
        fluid
      />

      <Segment basic style={eventImageTextStyle}>
        <Item.Group>
          <Item>
            <Item.Content>
              <Header size="huge" content={title} style={{ color: "white" }} />
              <p>{date}</p>
              <p>
                Hosted by <strong>{hostedBy}</strong>
              </p>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment>

    <Segment attached="bottom">
      <Button>Cancel My Place</Button>
      <Button color="teal">JOIN THIS EVENT</Button>

      <Button as={Link} to={`/manage/${id}`} color="orange" floated="right">
        Manage Event
      </Button>
    </Segment>
  </Segment.Group>
);

export default HeaderEvent;
