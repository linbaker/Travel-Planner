import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeSplash from "./containers/HomeSplash";

export default () =>
  <Switch>
    <Route path="/" exact component={HomeSplash} />
  </Switch>;