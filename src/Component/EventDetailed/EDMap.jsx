import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

const EventDetailedMap = ({ lat, lng }) => {
  console.log(lat,lng)
  const zoom = 14;
  return (
    <Segment attached="bottom">
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA_kUyNFoCjw7AEOj40lZwaUl0ExRTo79c" }}
          defaultCenter={{lat,lng}}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};
export default EventDetailedMap;


const Marker = () => (
    <Icon name="marker" size="big" color="red"></Icon>
  );
  