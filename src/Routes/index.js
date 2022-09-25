import React from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import Signup from "../Components/Signup";

function Routes() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect exact to="/#welcome" />;
        }}
      />
    </BrowserRouter>
  );
}

export default Routes;
