import React from "react";
import useScript from "./hooks/useScript";
const Gaggle = () => {

    useScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDbRJvIbu1ZsBTN0-gPCt3y04HF98el2Yo&callback=initMap&v=weekly");
    useScript("./scripts/google.js");
    useScript('./scripts/strava.js');
    
    return (
    <>
        <div id="map"></div>
        <div id="hillCards" class="ClimbCards"></div>
    </>
  );
};

export default Gaggle;
