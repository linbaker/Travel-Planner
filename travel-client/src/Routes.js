import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeSplash from "./containers/HomeSplash";
import Error404 from "./containers/Error404";

export default () =>
  <Switch>
    <Route path="/" exact component={HomeSplash} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={Error404} />
  </Switch>;