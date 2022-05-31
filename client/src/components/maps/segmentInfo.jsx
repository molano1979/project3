import React, { useState, Component } from "react";
import Modal from "react-modal";
import Gaggle from "./Gaggle";
import ModalSearch from "./ModalSearch";
import closeIcon from "../../assets/img/close.png"

const Segments = (stravaAPISegmentsJSON) => {
  const singleSegment = React.createClass({
    render() {
      return (
          {stravaAPISegmentsJSON.map((segmentData, index) =>
        <ul key={index}>
          <li key={index}>{segmentData.segmentName}</li>
          <li key={index}>{segmentData.segmentLength}</li>
          <li key={index}>{segmentData.segmentGrade}</li>
          <li key={index}>{segmentData.segmentGraph}</li>
          )
        </ul>
          });
    },
  });
};

export default Segments;
