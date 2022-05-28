import React, { useState } from "react";
import Modal from "react-modal";
import Gaggle from "./Gaggle";
import ModalSearch from "./ModalSearch";
import useScript from './hooks/useScript';

const Maps = () => {
  
  useScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDbRJvIbu1ZsBTN0-gPCt3y04HF98el2Yo&callback=initMap&v=weekly");
  useScript("./scripts/google.js");
  useScript('./scripts/strava.js');
  
  return (
    <>
      <div className="align-items-right">
        <button className="button" onClick={toggleModalOne}>
          Enter search criteria
        </button>
      </div>
      <Gaggle />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="search dialog"
        overlayClassName="custom-overlay"

      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            Close
          </button>
        <div data-aos="fade-up" data-aos-duration="1200">
      <ModalSearch />
        </div>
        </div>
      </Modal>
    </>
  );
};

export default Maps;
