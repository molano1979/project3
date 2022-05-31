import React, { useState, useEffect } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

const latOne = JSON.parse(localStorage.getItem("centerLat"));
const lonOne = JSON.parse(localStorage.getItem("centerLon"));

const markers = [
  {
    id: 1,
    position: { lat: latOne, lng: lonOne },
  },
  {
    id: 2,
    position: { lat: latOne + 0.5, lng: lonOne + 0.5 },
  },
];

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    ///
    let exchange_token = "7f032912936b4564eac02475096ad292defb694a";
    const secretID = process.env.REACT_APP_SECRET_ID;
    const clientID = process.env.REACT_APP_CLIENT_ID;
    const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;

    const callBackDomain = "http://localhost:3000/";

    newToken();
    function newToken() {
      const tokenURL = `https://www.strava.com/api/v3/oauth/token`;

      let xhr = new XMLHttpRequest();
      xhr.open("POST", tokenURL);

      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          let arrayResponse = JSON.parse(xhr.responseText);
          let expiration = arrayResponse.expires_in;
          let minutes = Math.floor(expiration / 60);
          let NEW_token = arrayResponse.access_token;
          localStorage.setItem("new_token", NEW_token);

          console.log("Minutes to expiration: %c" + minutes, "color:green");
        } else {
          console.log("%c Refreshing access token", "color:red");
        }
      };

      let data = `client_id=${clientID}&client_secret=${secretID}&grant_type=refresh_token&refresh_token=${refreshToken}`;

      xhr.send(data);
    }
    ///
    const bounds = new google.maps.LatLngBounds();
    let customStyle = [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#ebe3cd",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#523735",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f1e6",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#c9b2a6",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#dcd2be",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ae9e90",
          },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#93817c",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#a5b076",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#447530",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f1e6",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#fdfcf8",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#f8c967",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#e9bc62",
          },
        ],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          {
            color: "#e98d58",
          },
        ],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#db8555",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#806b63",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8f7d77",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ebe3cd",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#b9d3c2",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#92998d",
          },
        ],
      },
    ];
    map.setOptions({
      // zoom: 12,
      mapTypeId: "terrain",
      mapTypeControl: false,
      showstreetViewControl: false,
      showTooltip: false,
      showInfoWindow: false,
    });
    map.set("styles", customStyle);
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);

    // lat 1
    localStorage.setItem("sw_lat", bounds.Ab.h);

    //lon 1
    localStorage.setItem("sw_lon", bounds.Ua.h);

    //lat 2
    localStorage.setItem("ne_lat", bounds.Ab.j);

    //lon 2
    localStorage.setItem("ne_lon", bounds.Ua.j);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{
        width: "90vw",
        height: "90vh",
      }}
    >
      {markers.map(({ id, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{position}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default Map;
