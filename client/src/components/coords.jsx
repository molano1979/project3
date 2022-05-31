import React from "react";
import { Link } from "react-router-dom";


constructor(props) {
  super(props);
  this.state = {
    latitude: null,
    longitude: null,
    userAddress: null,
  };
  this.getLocation = this.getLocation.bind(this);
  this.getLocation = this.getCoordinates.bind(this);
};

getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.getCoordinates);
  } else {
    alert('geolocation not supported on this browser')
  }
}

getCoordinates(position) {
  console.log(position.coords.latitude);
  this.setState({
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  })
}