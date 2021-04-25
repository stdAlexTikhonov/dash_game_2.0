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
  }
};

document.onkeyup = () => {
  GameStore.players[0].setDirection(null);
  GameStore.players[0].setState(1);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
