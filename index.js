import React from "react";
import ReactDOM from "react-dom/client";
import Securitah from "./Securitah";
import { Auth0Provider } from "@auth0/auth0-react";

const domainAuth = process.env.REACT_APP_AUTH0_DOMAIN;
const clientIdAuth = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domainAuth}
    clientId={clientIdAuth}
    redirectUri={window.location.origin}
  >
    <Securitah />
  </Auth0Provider>
);
