import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Favorites from "./components/Favorites";
import Callback from "./components/Callback";
import GuardedRoute from "./components/GuardedRoute";
import "./App.css";
import auth from "./Auth";
import Search from "./components/maps/Search";
import Intro from "./components/intro/Intro";
import CAclose from './assets/img/close.svg'
import CAlogo from './assets/img/logo.svg'

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

        {/* switch replaces a failed page load with the next available successful load*/}
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/intro" component={Intro} />
          <GuardedRoute path="/favorites" component={Favorites} />
          <GuardedRoute exact path="/search" component={Search} />
          <Route exact path="/callback" component={Callback} />
          {/* not found will load if valid routes fail */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
