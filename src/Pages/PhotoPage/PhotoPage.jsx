import React, { useState, useEffect, Fragment } from "react";
import { firestoreConnect } from "react-redux-firebase";
import Dropzone from "./DropZone";
import CropImage from "./CropImage";
import { connect } from "react-redux";
import { uploadImage } from "../../redux/User/uploadPhotoActions";
import { toastr } from "react-redux-toastr";
import { compose } from "redux";
import { Segment, Header, Divider, Grid, Button } from "semantic-ui-react";
import UserPhotos from "./PhotoUser";

const query = ({ auth }) => {
  return [
    {
      collection: "users",
      doc: auth.uid,
      subcollection: [{ collection: "photos" }],
      storeAs: "photos",
    },
  ];
};

const PhotosPage = ({ uploadImage, photos, profile }) => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState(null);

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const handleUpload = async () => {
    try {
      await uploadImage(images, files[0].name);
      handlCancelCrop();
      toastr.success("Success", "Photo has been updated");
    } catch (error) {
      console.log(error);
      toastr.error("Oops", "Something Went Wrong!");
    }
  };
  const handlCancelCrop = () => {
    setFiles([]);
    setImages(null);
  };
  return (
    <Segment>
      <Header dividing size="large" content="Your Photos" />
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color="teal" sub content="Step 1 - Add Photo" />
          <Dropzone setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 2 - Resize image" />
          {files.length > 0 ? (
            <CropImage setImages={setImages} imagePreview={files[0].preview} />
          ) : null}
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 3 - Preview and Upload" />
          {files.length > 0 ? (
            <Fragment>
              <div
                className="img-preview"
                style={{
                  minHeight: "200px",
                  minWidth: "200px",
                  overflow: "hidden",
                }}
              />
              <Button.Group>
                <Button
                  positive
                  onClick={handleUpload}
                  style={{ width: "100px" }}
                  icon="check"
                ></Button>
                <Button
                  onClick={handlCancelCrop}
                  style={{ width: "100px" }}
                  icon="close"
                ></Button>
              </Button.Group>
            </Fragment>
          ) : null}
        </Grid.Column>
      </Grid>
      <Divider />
      <UserPhotos photos={photos} profile={profile} />
    </Segment>
  );
};
const actions = {
  uploadImage,
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  photos: state.firestore.ordered.photos,
});
export default compose(
  connect(mapStateToProps, actions),
  firestoreConnect((auth) => query(auth))
)(PhotosPage);
