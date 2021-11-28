import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect exact to="/#welcome" />;
        }}
      />
    </Switch>
  );
}

export default Routes;
