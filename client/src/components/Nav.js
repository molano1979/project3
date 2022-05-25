import React, { Component } from "react";
import { Link, Router } from "react-router-dom";
import auth from "../Auth";
// import auth, { UserPicture } from "../Auth";
import "../App.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    auth.logout();
    this.props.history.replace("/");
  };

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Cardiac Arrest
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            {auth.isAuthenticated() ? (
              <Link to="/add">Search for segments</Link>
            ) : (
              ""
            )}
          </li>

          <li>
            {auth.isAuthenticated() ? (
              <Link to="/favorites">Favorites</Link>
            ) : (
              ""
            )}
          </li>
          <li>
            <Link to="/howto">How To</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          {/* <li>
            {auth.isAuthenticated() ? (
              <img src={UserPicture} alt={UserName}></img>
            ) : (
              " "
            )}
          </li> */}
          <li>
            {auth.isAuthenticated() ? (
              <button
                className="btn btn-danger log"
                onClick={() => this.logout()}
              >
                Log out{" "}
              </button>
            ) : (
              <button className="btn btn-info log" onClick={() => auth.login()}>
                Log In
              </button>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Router(Nav);
