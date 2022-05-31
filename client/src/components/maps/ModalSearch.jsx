import React from "react";

const ModalSearch = () => {
  return (
    <>
    <section className="main-content ">
              <div className="col-6">
              <hr className="separator mt-5" />
                <h3 className="text-uppercase mb-5 ft-wt-600">
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
          <button type="button" className="btn btn-secondary" data-dismiss="modal" id="submit"
            onclick={() => hideFunction()}>Search and Close</button>
          </div>
          <hr className="separator mt-1" />
      </section>
    </>
  );
};

export default ModalSearch;
