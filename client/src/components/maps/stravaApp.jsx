import React, { useState, useEffect } from "react";

function Activities() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState({});

  //Strava Credentials
  let clientID = process.env.REACT_APP_CLIENT_ID;
  let clientSecret = process.env.REACT_APP_SECRET_ID;

  const bounds = [
    JSON.parse(localStorage.getItem("sw_lat")),
    JSON.parse(localStorage.getItem("sw_lon")),
    JSON.parse(localStorage.getItem("ne_lat")),
    JSON.parse(localStorage.getItem("ne_lon")),
  ];
  // console.log("parse", bounds);
  const current_token = localStorage.getItem("new_token");

  const activityType = localStorage.getItem("activity");
  const minClimb = localStorage.getItem("ratingMin");
  const maxClimb = localStorage.getItem("ratingMax");
  // refresh token and call address
  const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

  // endpoint for read-all activities. temporary token is added in getActivities()
  // const segmentsUrl = `https://www.strava.com/api/v3/athlete/activities?access_token=`
  const segmentsUrl = `https://www.strava.com/api/v3/segments/explore?bounds=${bounds}&activity_type=${activityType}&min_cat=${minClimb}&max_cat=${maxClimb}&access_token=`;

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(callRefresh, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => getActivities(result.access_token));
  }, [callRefresh]);

  // use current access token to call all activities
  function getActivities(access) {
    // console.log(segmentsUrl + access)
    fetch(segmentsUrl + access)
      .then((res) => res.json())
      .then(
        (data) => setActivities(data),
        setIsLoading((prev) => !prev)
      )
      .catch((e) => console.log(e));
  }

  function showActivities() {
    if (isLoading) return <>LOADING</>;
    if (!isLoading) {
      console.log(activities);
      return activities.length;
    }
  }

  return <div className="Activities">{showActivities()}</div>;
}

export default Activities;
