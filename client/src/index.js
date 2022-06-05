import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import auth from "./Auth";

import App from "./App";

import "tachyons";
import "./assets/index.css";
import "./assets/main.scss";

import registerServiceWorker from "./registerServiceWorker";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  request: (operation) => {
    operation.setContext((context) => ({
      headers: {
        ...context.headers,
        authorization: auth.getIdToken(),
      },
    }));
  },
});
const restEndpoint = () => {
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
  console.log(`
    bounds: ${bounds}
    current_token: ${current_token}
    activity_type: ${activityType}
    minClimb: ${minClimb}
    maxClimb: ${maxClimb}
    `)
 console.log(
   `http://localhost:3001/api/${bounds}/${current_token}/${activity_type}/${minClimb}/${maxClimb}`
  )
  return `http://localhost:3001/api/${bounds}/${current_token}/${activity_type}/${minClimb}/${maxClimb}`;
}
// const restEndpoint = 'http://localhost:3001/api/:bounds/:current_token/:activity_type/:minClimb/:maxClimb';
// const restEndpoint = 'https://shielded-atoll-03134.herokuapp.com/api/users/62929c53b3ce2bd17280bec0';

const callRestApi = async () => {
  const response = await fetch(restEndpoint());
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return React.createElement('h1', null, JSON.stringify(jsonResponse));
}

function RenderResult() {
  const [apiResponse, setApiResponse] = useState('loafing');
  useEffect(() => {
    callRestApi().then(
      result => setApiResponse(result));
  }, [])
  return (
    <div>
      <h1>React App</h1>
      <p>{apiResponse}</p>
    </div>
  );
};

ReactDOM.render(
  // <BrowserRouter>
  // {/* <ApolloProvider client={client}> */}
  <RenderResult />,
  // {/* <App /> */}
  // {/* </ApolloProvider> */}
  // {/* </BrowserRouter>, */}
  document.getElementById("root")
);

registerServiceWorker();
