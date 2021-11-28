import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";

function Routes() {
  return (
    <Router>
      <Switch>
        {/* <Route
          exact
          path="/"
          render={() => {
            return <Redirect exact to="/#welcome" />;
          }}
        /> */}
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
