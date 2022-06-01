import { Link } from "react-router-dom";
import React, { useState } from 'react';

  const Welcome = () => {
    const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  
  function GetLocation() {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          localStorage.setItem("centerLat", position.coords.latitude);
          localStorage.setItem("centerLon", position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  }
  return (
    <div className="welcome_page">
      <div
        className="hero bg-image"
        style={{
          backgroundImage: `url(${
            `${process.env.PUBLIC_URL}/img/mainbg.svg`
          })`,
        }}
      >
        <div className="content" onLoad={GetLocation}>
          <h1 data-aos="fade-up" data-aos-duration="1200">
            <img
              id="logo-align"
              src="../img/logo_dark.svg"
              alt="Cardiac arrest app logo"
            />
                   {auth.isAuthenticated() ? (
              ""
            ) : (
              "Login for more functions"
            )}
          </h1>

          
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            Welcome!
          </p>
            <Link to="/search">
              <button
                type="button"
                className="btn btn-info log"
              >
              Find new segments
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
