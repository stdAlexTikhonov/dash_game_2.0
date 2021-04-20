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
      GameStore.setPlayer1Direction("DOWN");
      break;
    case "ArrowUp":
      GameStore.setPlayer1Direction("UP");
      break;
    case "ArrowLeft":
      GameStore.setPlayer1Direction("LEFT");
      break;
    case "ArrowRight":
      GameStore.setPlayer1Direction("RIGHT");
      break;
  }
};

document.onkeyup = () => GameStore.setPlayer1Direction(null);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
