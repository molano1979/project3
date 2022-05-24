import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import "../App.css";
import React, { Component } from "react";
// import { Router } from "react-router-dom";
import loading from "../loading.svg";
import auth from "../Auth";

class HowTo extends Component {
  async componentDidMount() {
    await auth.handleAuthentication();
    this.props.history.replace("/");
  }

  render() {
    const style = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "gray",
    };

    return (
      <div style={style}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default HowTo;
