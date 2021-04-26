import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import GameStore from "./store/GameStore";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

document.onkeydown = (e: { code: string }) => {
  switch (e.code) {
    case "ArrowDown":
      GameStore.players[0].setDirection("DOWN");
      GameStore.players[0].setState(0);
      break;
    case "ArrowUp":
      GameStore.players[0].setDirection("UP");
      GameStore.players[0].setState(2);
      break;
    case "ArrowLeft":
      GameStore.players[0].setDirection("LEFT");
      GameStore.players[0].setState(0);
      break;
    case "ArrowRight":
      GameStore.players[0].setDirection("RIGHT");
      GameStore.players[0].setState(2);
      break;
    case "KeyS":
      if (!GameStore.multiplayer) return;
      GameStore.players[1].setDirection("DOWN");
      GameStore.players[1].setState(0);
      break;
    case "KeyW":
      if (!GameStore.multiplayer) return;
      GameStore.players[1].setDirection("UP");
      GameStore.players[1].setState(2);
      break;
    case "KeyA":
      if (!GameStore.multiplayer) return;
      GameStore.players[1].setDirection("LEFT");
      GameStore.players[1].setState(0);
      break;
    case "KeyD":
      if (!GameStore.multiplayer) return;
      GameStore.players[1].setDirection("RIGHT");
      GameStore.players[1].setState(2);
      break;
  }
};

document.onkeyup = (e) => {
  switch (e.code) {
    case "KeyW":
    case "KeyA":
    case "KeyS":
    case "KeyD":
      if (!GameStore.multiplayer) return;
      GameStore.players[1].setDirection(null);
      GameStore.players[1].setState(1);
      break;
    default:
      GameStore.players[0].setDirection(null);
      GameStore.players[0].setState(1);
      break;
  }
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
