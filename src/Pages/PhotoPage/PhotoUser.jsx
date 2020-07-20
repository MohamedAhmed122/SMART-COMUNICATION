import React, { Fragment } from "react";
import { Header, Card, Button, Image } from "semantic-ui-react";

const UserPhotos = ({ photos, profile }) => (
  <Fragment>
    <Header sub color="teal" content="All Photos" />
    <Card.Group itemsPerRow={5}>
      <Card>
        <Image src={profile.photoURL} style={{minHeight: '200px', minWidth: '200px'}}/>
        <Button positive>Main Photo</Button>
      </Card>
      {photos &&
        photos.map((photo) => (
          <Card key={photo.id} style={{minHeight: '200px', minWidth: '200px'}} >
            <Image src={photo.url} style={{minHeight: '200px', minWidth: '200px'}} />
            <div className="ui two buttons">
              <Button basic color="green">
                Main
              </Button>
              <Button basic icon="trash" color="red" />
            </div>
          </Card>
        ))}
    </Card.Group>
  </Fragment>
);
export default UserPhotos;
