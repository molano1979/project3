import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div class="login">
        <h5>
          {user.name}
          <img class="profile" src={user.picture} alt={user.name} />
        </h5>

        {/* <JSONPretty data={user} /> */}
      </div>
    )
  );
};

export default Profile;
