import React from "react";
import useScript from "./hooks/useScript";

const ModalSearch = () => {

  useScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDbRJvIbu1ZsBTN0-gPCt3y04HF98el2Yo&callback=initMap&v=weekly");
  useScript("./scripts/google.js");
  useScript('./scripts/strava.js');

  return (
    <>
    <section className="main-content ">
              <div className="col-12">
              <hr className="separator mt-1" />
                <h3 className="text-uppercase mb-0 ft-wt-600">
                  Search for segments
                </h3>
              </div>
          
        Activity type:
          <select id="activityType">
            <option value="running">Running</option>
            <option value="riding">Riding</option>
        </select>
        Minimum climb rating:<input type="number" id="minClimb" value="2" min="2" max="4"></input>
        Maximum climb rating:<input type="number" id="maxClimb" value="1" min="1" max="3"></input>
          
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" id="submit"
            onclick={() => hideFunction()}>Search and Close</button>
          </div>
          <hr className="separator mt-1" />
      </section>
    </>
  );
};

export default ModalSearch;
