/* eslint-disable filenames/match-exported */
/* eslint-disable filenames/match-regex */
import React, { Component } from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "700px",
  width: "100%"
};
const googleMapKey = "AIzaSyACbniOGsL8X1-PYwaJmIPDjIfnptHZQNE";
const center = {
  lat: -34.397,
  lng: 150.644
};
const libraries = [];

export class MapWithScript extends Component {
  state = { ready: true };

  onClick = () => {
    const { ready } = this.state;
    this.setState({ ready: !ready });
  };
  onLoad = () => {
    console.log("script loaded");
  };
  render() {
    const { ready } = this.state;
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={googleMapKey}
        language={"en"}
        region="EN"
        version="weekly"
        libraries={libraries}
        onLoad={this.onLoad}
        loadingElement={<div>Loading...</div>}
      >
        <div>
          <button onClick={this.onClick}>{ready ? "Unmount" : "Mount"}</button>{" "}
          <br />
          {ready ? (
            <GoogleMap
              id="basic-map-example"
              reuseSameInstance={false}
              mapContainerStyle={mapContainerStyle}
              zoom={8}
              center={center}
            />
          ) : (
            <div>Map unmounted!</div>
          )}
        </div>
      </LoadScript>
    );
  }
}
