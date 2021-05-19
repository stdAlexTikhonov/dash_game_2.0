import World from "./characters/World";

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
