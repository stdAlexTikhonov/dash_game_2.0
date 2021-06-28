import World from "./characters/World";

document.onkeydown = (e: { code: string }) => {
  switch (e.code) {
    case "ArrowUp":
      clearTimeout(World.player!.input_timeout);
      World.player?.setUserInput("UP");
      if (World.player?.prev_horizontal_state === "LEFT")
        World.player?.setState(0);
      else World.player?.setState(2);
      break;
    case "ArrowDown":
      clearTimeout(World.player!.input_timeout);
      World.player?.setUserInput("DOWN");
      if (World.player?.prev_horizontal_state === "LEFT")
        World.player?.setState(0);
      else World.player?.setState(2);
      break;
    case "ArrowRight":
      clearTimeout(World.player!.input_timeout);
      World.player?.setUserInput("RIGHT");
      World.player?.setState(2);
      break;
    case "ArrowLeft":
      clearTimeout(World.player!.input_timeout);
      World.player?.setUserInput("LEFT");
      World.player?.setState(0);
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
        World.player?.setUserInput(null);
        World.player?.setState(1);
      }, 50);
      break;
  }
};
