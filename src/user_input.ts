import World from "./characters/World";
import { store } from "./store/store";
import { setUserInput } from "./store/playerSlice";

document.onkeydown = (e: { code: string }) => {
  const player = World.GAME_OBJECTS.find((item) => item.char === "A");
  if (player)
    switch (e.code) {
      case "ArrowUp":
        clearTimeout(player.input_timeout);
        store.dispatch(setUserInput("UP"));
        if (!player.move_state)
          if (player.prev_horizontal_state === "LEFT") player.setState(0);
          else player.setState(2);
        break;
      case "ArrowDown":
        clearTimeout(player.input_timeout);
        store.dispatch(setUserInput("DOWN"));
        if (!player.move_state)
          if (player.prev_horizontal_state === "LEFT") player.setState(0);
          else player.setState(2);
        break;
      case "ArrowRight":
        clearTimeout(player.input_timeout);
        store.dispatch(setUserInput("RIGHT"));
        if (!player.move_state) player.setState(2);
        break;
      case "ArrowLeft":
        clearTimeout(player.input_timeout);
        store.dispatch(setUserInput("LEFT"));
        if (!player.move_state) player.setState(0);
        break;
      case "KeyW":
        clearTimeout(World.player2!.input_timeout);
        if (World.player2?.prev_horizontal_state === "LEFT")
          World.player2?.setState(0);
        else World.player2?.setState(2);
        break;
      case "KeyS":
        clearTimeout(World.player2!.input_timeout);

        if (World.player2?.prev_horizontal_state === "LEFT")
          World.player2?.setState(0);
        else World.player2?.setState(2);
        break;
      case "KeyD":
        clearTimeout(World.player2!.input_timeout);

        World.player2?.setState(2);
        break;
      case "KeyA":
        clearTimeout(World.player2!.input_timeout);

        World.player2?.setState(0);
        break;
    }
};

document.onkeyup = (e: { code: string }) => {
  const player = World.GAME_OBJECTS.find((item) => item.char === "A");
  if (player)
    switch (e.code) {
      case "KeyW":
      case "KeyS":
      case "KeyA":
      case "KeyD":
        World.player2!.input_timeout = setTimeout(() => {
          World.player2?.setState(1);
        }, 50);
        break;
      default:
        player.input_timeout = setTimeout(() => {
          store.dispatch(setUserInput(null));
          player.setState(1);
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
