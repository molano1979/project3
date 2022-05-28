import React, { useState, Component } from "react";
import Modal from "react-modal";
import Gaggle from "./Gaggle";
import ModalSearch from "./ModalSearch";

const Maps = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  // useScript('./scripts/strava.js');

  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  }
  return (
    <>
      <div className="align-items-right">
        <button className="button" onClick={toggleModalOne}>
          Enter search criteria
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="search dialog"
        overlayClassName="custom-overlay"
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            Close
          </button>{" "}
          Search around:{" "}
          <div className="Welcome">
            {status}
            {lat && <list>Latitude: {lat}</list>}
            {lng && <list> Longitude: {lng}</list>}
          </div>
          <div data-aos="fade-up" data-aos-duration="1200">
            <ModalSearch />
          </div>
        </div>
      </Modal>

      <Gaggle />
    </>
  );
};

export default Maps;
