import World from "./characters/World";
import { store } from "./store/store";
import { setUserInput } from "./store/playerSlice";

document.onkeydown = (e: { code: string }) => {
  switch (e.code) {
    case "ArrowUp":
      clearTimeout(World.player!.input_timeout);
      World.player?.setUserInput("UP");
      store.dispatch(setUserInput("UP"));
      if (!World.player?.move_state)
        if (World.player?.prev_horizontal_state === "LEFT")
          World.player?.setState(0);
        else World.player?.setState(2);
      break;
    case "ArrowDown":
      clearTimeout(World.player!.input_timeout);
      World.player?.setUserInput("DOWN");
      store.dispatch(setUserInput("DOWN"));
      if (!World.player?.move_state)
        if (World.player?.prev_horizontal_state === "LEFT")
          World.player?.setState(0);
        else World.player?.setState(2);
      break;
    case "ArrowRight":
      clearTimeout(World.player!.input_timeout);
      World.player?.setUserInput("RIGHT");
      store.dispatch(setUserInput("RIGHT"));
      if (!World.player?.move_state) World.player?.setState(2);
      break;
    case "ArrowLeft":
      clearTimeout(World.player!.input_timeout);
      World.player?.setUserInput("LEFT");
      store.dispatch(setUserInput("LEFT"));
      if (!World.player?.move_state) World.player?.setState(0);
      break;
    case "KeyW":
      clearTimeout(World.player2!.input_timeout);
      World.player2?.setUserInput("UP");
      if (World.player2?.prev_horizontal_state === "LEFT")
        World.player2?.setState(0);
      else World.player2?.setState(2);
      break;
    case "KeyS":
      clearTimeout(World.player2!.input_timeout);
      World.player2?.setUserInput("DOWN");
      if (World.player2?.prev_horizontal_state === "LEFT")
        World.player2?.setState(0);
      else World.player2?.setState(2);
      break;
    case "KeyD":
      clearTimeout(World.player2!.input_timeout);
      World.player2?.setUserInput("RIGHT");
      World.player2?.setState(2);
      break;
    case "KeyA":
      clearTimeout(World.player2!.input_timeout);
      World.player2?.setUserInput("LEFT");
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
      World.player2!.input_timeout = setTimeout(() => {
        World.player2?.setUserInput(null);
        World.player2?.setState(1);
      }, 50);
      break;
    default:
      World.player!.input_timeout = setTimeout(() => {
        store.dispatch(setUserInput(null));
        World.player?.setUserInput(null);
        World.player?.setState(1);
      }, 50);
      break;
  }
};

// window.addEventListener("gamepadconnected", (event) => {
//   console.log("Gamapad connected: ");
//   console.log(event.gamepad);
// });

// window.addEventListener("gamepaddisconnected", (event) => {
//   console.log("Gamapad disconnected");
// });
