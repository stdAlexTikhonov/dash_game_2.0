import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import World from "./characters/World";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");
document.body.appendChild(canvas);

let frame = 0;

document.onkeydown = (e: { code: string }) => {
  switch (e.code) {
    case "ArrowUp":
      World.player?.setDirection("UP");
      if (World.player?.prev_horizontal_state === "LEFT")
        World.player?.setState(0);
      else World.player?.setState(2);
      break;
    case "ArrowDown":
      World.player?.setDirection("DOWN");
      if (World.player?.prev_horizontal_state === "LEFT")
        World.player?.setState(0);
      else World.player?.setState(2);
      break;
    case "ArrowRight":
      World.player?.setDirection("RIGHT");
      World.player?.setState(2);
      break;
    case "ArrowLeft":
      World.player?.setDirection("LEFT");
      World.player?.setState(0);
      break;
    case "KeyW":
      World.player2?.setDirection("UP");
      if (World.player2?.prev_horizontal_state === "LEFT")
        World.player2?.setState(0);
      else World.player2?.setState(2);
      break;
    case "KeyS":
      World.player2?.setDirection("DOWN");
      if (World.player2?.prev_horizontal_state === "LEFT")
        World.player2?.setState(0);
      else World.player2?.setState(2);
      break;
    case "KeyD":
      World.player2?.setDirection("RIGHT");
      World.player2?.setState(2);
      break;
    case "KeyA":
      World.player2?.setDirection("LEFT");
      World.player2?.setState(0);
      break;
  }
};

document.onkeyup = (e: { code: string }) => {
  switch (e.code) {
    case "KeyW":
    case "KeyS":
    case "KeyA":
    case "KeyD":
      World.player2?.resetDirection();
      World.player2?.setState(1);
      break;
    default:
      World.player?.resetDirection();
      World.player?.setState(1);
      break;
  }
};

export const draw = () => {
  if (frame === 0) {
    World.tick();
  }

  World.draw(context!, frame);
  frame = frame < 6 ? frame + 1 : 0;

  window.requestAnimationFrame(draw);
};

draw();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
