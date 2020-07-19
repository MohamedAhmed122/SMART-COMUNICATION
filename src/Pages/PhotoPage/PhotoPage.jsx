import React, { useState, useEffect } from "react";
import MyDropzone from "./DropZone";
import {
  Image,
  Segment,
  Header,
  Divider,
  Grid,
  Button,
  Card,
} from "semantic-ui-react";

const PhotosPage = () => {
  const [files, setFile] = useState([]);
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);
  return (
    <Segment>
      <Header dividing size="large" content="Your Photos" />
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color="teal" sub content="Step 1 - Add Photo" />
          <MyDropzone setFile={setFile} />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 2 - Resize image" />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 3 - Preview and Upload" />
          {files.length > 0 ? (
            <Image
              src={files[0].preview}
              style={{ minHeight: "200px", minWidth: "200px" }}
            />
          ) : null}
        </Grid.Column>
      </Grid>

      <Divider />
      <Header sub color="teal" content="All Photos" />

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
          <Button positive>Main Photo</Button>
        </Card>

        <Card>
          <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
          <div className="ui two buttons">
            <Button basic color="green">
              Main
            </Button>
            <Button basic icon="trash" color="red" />
          </div>
        </Card>
      </Card.Group>
    </Segment>
  );
};

export default PhotosPage;
