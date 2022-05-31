import React, { useState, useEffect } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import mapCustomStyle from './mapCustomStyle.json';

const latOne = JSON.parse(localStorage.getItem('centerLat')) || 47.7081431;
const lonOne = JSON.parse(localStorage.getItem('centerLon')) || -122.2066806;

const markers = [
  {
    id: 1,
    position: { lat: latOne, lng: lonOne },
  },
  {
    id: 2,
    position: { lat: latOne + 0.1, lng: lonOne + 0.1 },
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
    const exchange_token = '7f032912936b4564eac02475096ad292defb694a';
    const secretID = process.env.REACT_APP_SECRET_ID;
    const clientID = process.env.REACT_APP_CLIENT_ID;
    const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;

    const callBackDomain = 'http://localhost:3000/';

    newToken();
    function newToken() {
      const tokenURL = 'https://www.strava.com/api/v3/oauth/token';

      const xhr = new XMLHttpRequest();
      xhr.open('POST', tokenURL);

      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          const arrayResponse = JSON.parse(xhr.responseText);
          const expiration = arrayResponse.expires_in;
          const minutes = Math.floor(expiration / 60);
          const NEW_token = arrayResponse.access_token;
          localStorage.setItem('new_token', NEW_token);

          console.log(`Minutes to expiration: %c${minutes}`, 'color:green');
        } else {
          console.log('%c Refreshing access token', 'color:red');
        }
      };

      const data = `client_id=${clientID}&client_secret=${secretID}&grant_type=refresh_token&refresh_token=${refreshToken}`;

      xhr.send(data);
    }
    ///
    const bounds = new google.maps.LatLngBounds();
    const customStyle = [mapCustomStyle];
    map.setOptions({
      // zoom: 12,
      mapTypeId: 'terrain',
      mapTypeControl: false,
      showstreetViewControl: false,
      showTooltip: false,
      showInfoWindow: false,
    });
    map.set('styles', customStyle);
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);

    // lat 1
    localStorage.setItem('sw_lat', bounds.Ab.h);

    // lon 1
    localStorage.setItem('sw_lon', bounds.Ua.h);

    // lat 2
    localStorage.setItem('ne_lat', bounds.Ab.j);

    // lon 2
    localStorage.setItem('ne_lon', bounds.Ua.j);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{
        width: '90vw',
        height: '90vh',
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
