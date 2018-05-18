import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import App from "./App";

class AppRouter extends Component {
  render() {
    return (
      <div>
        {/* Routes */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/raging-typist" component={App} />
      </div>
    );
  }
}

export default AppRouter;
