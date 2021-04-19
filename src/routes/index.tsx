import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { StartScreen } from "../components/StartScreen";
import { Game } from "../components/Game";
import { LevelList } from "../components/LevelList";
import { Settings } from "../components/Settings";

export const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/start" />
      <Route path="/start" component={StartScreen} />
      <Route path="/game" component={Game} />
      <Route path="/settings" component={Settings} />
      <Route path="/levels" component={LevelList} />
    </Switch>
  );
};
