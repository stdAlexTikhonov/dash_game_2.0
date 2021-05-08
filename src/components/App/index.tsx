import { Routes } from "../../routes";
import Box from "@material-ui/core/Box";
import AppBar from "../AppBar";
import World from "../../characters/World";

const App = () => {
  const handleKeyDown = (e: { code: string }) => {
    switch (e.code) {
      case "ArrowUp":
        World.player?.setDirection("UP");
        World.player?.setState(0);
        break;
      case "ArrowDown":
        World.player?.setDirection("DOWN");
        World.player?.setState(2);
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
        World.player2?.setState(0);
        break;
      case "KeyS":
        World.player2?.setDirection("DOWN");
        World.player2?.setState(2);
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

  const handleKeyUp = (e: { code: string }) => {
    switch (e.code) {
      case "KeyW":
      case "KeyS":
      case "KeyA":
      case "KeyD":
        World.player2?.setDirection(null);
        World.player2?.setState(1);
        break;
      default:
        World.player?.setDirection(null);
        World.player?.setState(1);
        break;
    }
  };

  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      bgcolor="black"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <AppBar />
      <Routes />
    </Box>
  );
};

export default App;
