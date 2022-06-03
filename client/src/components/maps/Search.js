import React, { useState, Component } from "react";
import Modal from "react-modal";
import Gaggle from "./Gaggle";
import ModalSearch from "./ModalSearch";
import segmentList from "../segmentList";
import closeIcon from "../../assets/img/close.png"
import CAmodal from "../../assets/img/modal_bg.svg";

const Maps = () => {
  // useScript('./scripts/strava.js');

  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="align-items-right">
        <button id="search-criteria" className="button" onClick={toggleModalOne}>
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
            <img src={closeIcon} alt="close window" />
          </button>
          <div data-aos="fade-up" data-aos-duration="1200">
            <ModalSearch />
          </div>
        </div>
      </Modal>
      <segmentList />
      <Gaggle />
    </>
  );
};

export default Maps;
