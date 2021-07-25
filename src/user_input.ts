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
        break;
      case "ArrowDown":
        clearTimeout(player.input_timeout);
        store.dispatch(setUserInput("DOWN"));
        break;
      case "ArrowRight":
        clearTimeout(player.input_timeout);
        store.dispatch(setUserInput("RIGHT"));
        break;
      case "ArrowLeft":
        clearTimeout(player.input_timeout);
        store.dispatch(setUserInput("LEFT"));
        break;
      case "KeyW":
        clearTimeout(World.player2!.input_timeout);

        break;
      case "KeyS":
        clearTimeout(World.player2!.input_timeout);

        break;
      case "KeyD":
        clearTimeout(World.player2!.input_timeout);

        break;
      case "KeyA":
        clearTimeout(World.player2!.input_timeout);

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
        break;
      default:
        player.input_timeout = setTimeout(() => {
          store.dispatch(setUserInput(null));
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
