import React, { useState, Component } from "react";
import Modal from "react-modal";
import Gaggle from "./Gaggle";
import ModalSearch from "./ModalSearch";
import SegmentList from "../SegmentList";
import closeIcon from "../../assets/img/close.png"
import CAmodal from "../../assets/img/modal_bg.svg";

const Maps = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [segmentData, setSegmentData] = useState(null);

  function handleOnClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="align-items-right">
        <button id="search-criteria" className="button" onClick={handleOnClick}>
          Enter search criteria
        </button>
      </div>

      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={handleOnClick}
        contentLabel="search dialog"
        overlayClassName="custom-overlay"
      >
        <div>
          <button className="close-modal" onClick={handleOnClick}>
            <img src={closeIcon} alt="close window" />
          </button>
          <div data-aos="fade-up" data-aos-duration="1200">
            <ModalSearch />
          </div>
        </div>
      </Modal>
      {segmentData && <SegmentList />}
      <Gaggle />
    </>
  );
};

export default Maps;
