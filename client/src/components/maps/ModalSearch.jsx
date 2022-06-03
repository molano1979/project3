import React, { useState, Component, useEffect } from "react";
// import { default as strava, Strava } from 'strava-v3';
import CAmodal from "../../assets/img/modal_bg.svg";

const ModalSearch = () => {
  //  using react mouting state to load a function

  const [activity, setActivity] = useState("running");
  const [ratingMax, setMax] = useState("0");
  const [ratingMin, setMin] = useState("5");
  const [listNames] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const search = { activity, ratingMax, ratingMin };
    localStorage.setItem("activity", activity);
    localStorage.setItem("ratingMax", ratingMax);
    localStorage.setItem("ratingMin", ratingMin);

    const bounds = [
      JSON.parse(localStorage.getItem("sw_lat")),
      JSON.parse(localStorage.getItem("sw_lon")),
      JSON.parse(localStorage.getItem("ne_lat")),
      JSON.parse(localStorage.getItem("ne_lon")),
    ];
    console.log("parse", bounds);
    const current_token = localStorage.getItem("new_token");

    const activityType = localStorage.getItem("activity");
    const minClimb = localStorage.getItem("ratingMin");
    const maxClimb = localStorage.getItem("ratingMax");
    const segmentsUrl = `https://www.strava.com/api/v3/segments/explore?bounds=${bounds}&activity_type=${activityType}&min_cat=${minClimb}&max_cat=${maxClimb}&access_token=${current_token}`;
    // // /////////////////////////////////////////////////////
    console.log(segmentsUrl);
    fetch(segmentsUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log("Success: ", data);
        //////
        for (let i = 0; i > data.segments.length; i++) {
          const names = data.segments[i].name;
          const profilesPNG = data.segments[i].elevation_profile;
          const climbL = data.segments[i].distance;
          const grade = data.segments[i].avg_grade;
          const lats = data.segments[i].start_latlng[0];
          const lons = data.segments[i].start_latlng[1];
          console.log(names, profilesPNG, grade, climbL);
        }
        ///////
      })
      .catch((error) => {
        console.error("Error fetching: ", error);
      });
      this.setState({ showModal: false });
  };
  /////////////////////////////////
  // console.log("Success:", data);
  // let segmentList = [];
  // for (let i = 0; i < data.segments.length; i++) {
  //   let currentSegment = data.segments[i];
  //   let name = currentSegment.name;
  //   let avgGrade = currentSegment.avg_grade;
  //   let climbL = currentSegment.distance;
  //   let profileC = currentSegment.elevation_profile;
  //   let lats = currentSegment.start_latlng[0];
  //   let lons = currentSegment.start_latlng[1];
  //   let hillsCard = `
  //         <div className="col-sm this" >
  //         <div className="card">
  //         <div className="card-body">
  //         <p><strong>${name}</strong></p>
  //         <div><img src=${profileC} /></div>
  //         <p>Length of climb: ${climbL} feet.</p>
  //         <p>Average grade: ${avgGrade}%</p>
  //         <p><a href="https://www.google.com/maps/search/?api=1&query=${lats}%2C${lons}">Starting location</a></p></div>
  //         </div>
  //         </div>`;

  return (
    <>
      <section className="main-content">
        <div className="col-6">
          <h3 className="text-uppercase mb-5 ft-wt-600">Search for segments</h3>
          <hr />
        </div>
        <form onSubmit={handleSubmit}>
          <label>Activity type</label>
          <br />
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          >
            <option value="running">Running</option>
            <option value="riding">Riding</option>
          </select>
          <p />
          <label>Climb Ratings</label>
          <br />
          Minimum : <br />
          <input
            type="number"
            value={ratingMin}
            onChange={(e) => setMin(e.target.value)}
            min="1"
            max="5"
            required
          ></input>
          <p />
          Maximum : <br />
          <input
            type="number"
            value={ratingMax}
            onChange={(e) => setMax(e.target.value)}
            min="0"
            max="4"
            required
          ></input>
          <p />
          <div className="modal-footer">
            <button type="submit" value="Submit" data-dismiss="modal">
              Search
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ModalSearch;
