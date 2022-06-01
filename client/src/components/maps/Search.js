import React, { useState, Component } from "react";
import Modal from "react-modal";
import Gaggle from "./Gaggle";
import ModalSearch from "./ModalSearch";

const Maps = () => {
  // useScript('./scripts/strava.js');

  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="align-items-right">
        <button className="button" onClick={toggleModalOne}>
          Enter search criteria
        </button>
      </div>

      <Modal
        ariaHideApp={false}
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

      <Gaggle />
    </>
  );
};

export default Maps;
