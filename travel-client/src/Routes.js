import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import HomeSplash from "./containers/HomeSplash";
import Error404 from "./containers/Error404";
import Login from "./containers/Login"

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={HomeSplash} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={Error404} />
  </Switch>;