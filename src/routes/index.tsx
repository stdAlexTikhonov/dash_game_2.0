import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { StartScreen } from "../components/StartScreen";
import { Canvas } from "../components/Canvas";

export const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/start" />
      <Route path="/start" component={StartScreen} />
      <Route path="/home" component={Canvas} />
    </Switch>
  );
};
