import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


// import JSONPretty from "react-json-pretty";

export const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Navbar>
      <div class="login">
        <h5>
          {user.name}
          <img class="profile" src={user.picture} alt={user.name} />
        </h5>

        {/* <JSONPretty data={user} /> */}
      </div>
      </Navbar>
    )
  );
};

export default Profile;
