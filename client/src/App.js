import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Callback from "./components/Callback";
import Welcome from "./components/Welcome";
import HowTo from "./components/HowTo";
import GuardedRoute from "./components/GuardedRoute";
import "./App.css";
import auth from "./Auth";
import Welcome from "./components/Welcome";

class App extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === "/callback") return;
    try {
      await auth.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === "login_required") return;
      console.log(err.error);
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <GuardedRoute path="/howto" component={HowTo} />
        <GuardedRoute exact path="/callback" component={Callback} />
        {/* not found will load if valid routes fail */}
        <Route component={NotFound} />
      </div>
    );
  }
}

export default withRouter(App);
