import React from "react";
import { Canvas } from "../Canvas";
import { Dev } from "../DevMode";
import GameStore from "../../store/GameStore";
import { observer } from "mobx-react-lite";

export const Game = observer(() => (GameStore.devMode ? <Dev /> : <Canvas />));
