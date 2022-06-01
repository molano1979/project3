import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth from '../Auth';
// import auth, { UserPicture } from "../Auth";
import '../App.css';
import CAlogo from '../assets/img/logo.svg';
import CAheader from '../assets/img/headerImg_light.svg';

class Nav extends Component {
  logout = () => {
    auth.logout();
    this.props.history.replace('/');
  };

  render() {
    return (
      <nav
        className="navbar navbar-default nav-new"
        style={{ backgroundImage: `url(${CAheader})` }}
      >
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img src={CAlogo} alt="logo" />
            Cardiac Arrest
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            {auth.isAuthenticated() ? (
              <Link to="/search">Search for segments</Link>
            ) : (
              ''
            )}
          </li>

          <li>
            {auth.isAuthenticated() ? (
              <Link to="/favorites">Favorites</Link>
            ) : (
              ''
            )}
          </li>
          <li>
            <Link to="/intro">Intro</Link>
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
                type="button"
                className="btn btn-danger log"
                onClick={() => this.logout()}
              >
                Log out
                {' '}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-info log"
                onClick={() => auth.login()}
              >
                Log In
              </button>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
