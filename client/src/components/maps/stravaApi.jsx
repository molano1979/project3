import React, { useEffect, render } from 'react'
import SegmentList from "../SegmentList";
import ReactDOM from "react-dom";

export const fetchReq = (segmentsUrl) => {
    fetch(segmentsUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        // console.log("Success: ", data);
        //////
        for (let i = 0; i < data.segments.length; i++) {
          const names = data.segments[i].name;
          const profilesPNG = data.segments[i].elevation_profile;
          const climbL = data.segments[i].distance;
          const grade = data.segments[i].avg_grade;
          const lats = data.segments[i].start_latlng[0];
          const lons = data.segments[i].start_latlng[1];
          // console.log(names, profilesPNG, grade, climbL);
          console.log(data.segments);
          <SegmentList props={data.segments} />
        }
        ///////
      })
      .catch((error) => {
        console.error("Error fetching: ", error);
      });
  };
