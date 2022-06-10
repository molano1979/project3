import React, { useState, Component, useEffect } from "react";
<<<<<<< HEAD
=======
// import { default as strava, Strava } from 'strava-v3';
import CAmodal from "../../assets/img/modal_bg.svg"

>>>>>>> dadc4d3f4b4821f8e9be83fd1b0f55e23f069eb3


const ModalSearch = () => {
  const [activity, setActivity] = useState("running");
  const [ratingMax, setMax] = useState("0");
  const [ratingMin, setMin] = useState("5");
  const [listNames] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = { activity, ratingMax, ratingMin }
    localStorage.setItem("activity", activity);
    localStorage.setItem("ratingMax", ratingMax);
    localStorage.setItem("ratingMin", ratingMin);
  }
  const bounds = [
  JSON.parse(localStorage.getItem("sw_lat")),
  JSON.parse(localStorage.getItem("sw_lon")),
  JSON.parse(localStorage.getItem("ne_lat")),
  JSON.parse(localStorage.getItem("ne_lon")),
  ];
    const current_token = localStorage.getItem("new_token");
    const activityType = localStorage.getItem("activity");
    const minClimb = localStorage.getItem("ratingMin");
    const maxClimb = localStorage.getItem("ratingMax");
    const segmentsUrl = `https://www.strava.com/api/v3/segments/explore?bounds=${bounds}&activity_type=${activityType}&min_cat=${minClimb}&max_cat=${maxClimb}&access_token=${current_token}`;
    fetch(segmentsUrl)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
        console.log("Success: ", data);
        localStorage.setItem("data_seg", data.segments);
        const names = data.segments.name
        const profilesPNG = data.segments.elevation_profile;
        const climbL = data.segments.distance;
        const grade = data.segments.avg_grade
        const lats = data.segments.start_latlng[0];
        const lons = data.segments.start_latlng[1]
      })
        .catch(error => {
          console.error("Error fetching: ", error);
      })
               
  return (
    <>
    <section className="main-content">
              <div className="col-6">
                <h3 className="text-uppercase mb-5 ft-wt-600">
                  Search for segments
          </h3>
          <hr />
             </div>
        <form onSubmit={handleSubmit} >
          <label>Activity type</label><br />
          <select value={activity} onChange={(e) => setActivity(e.target.value)} required>
            <option value="running">Running</option>
            <option value="riding">Riding</option>
          </select><p />
          <label>Climb Ratings</label><br />
          Minimum : <br /><input type="number" value={ratingMin} onChange={(e) => setMin(e.target.value)} min="1" max="5" required></input><p />
          Maximum : <br /><input type="number" value={ratingMax} onChange={(e) => setMax(e.target.value)} min="0" max="4"  required></input>
          <p />
          <div className="modal-footer">
          <button type="submit" value="submit" data-dismiss="modal">Search</button>
          </div>
        </form>
<<<<<<< HEAD
        
        <hr />

=======
>>>>>>> dadc4d3f4b4821f8e9be83fd1b0f55e23f069eb3
      </section>
    </>
  );
};

export default ModalSearch;
