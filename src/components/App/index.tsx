import { Routes } from "../../routes";
import Box from "@material-ui/core/Box";
import AppBar from "../AppBar";
import World from "../../characters/World";

const App = () => {
  const handleKeyDown = (e: { code: string }) => {
    console.log(e.code);
    switch (e.code) {
      case "ArrowUp":
        World.player?.setDirection("UP");
        break;
      case "ArrowDown":
        World.player?.setDirection("DOWN");
        break;
      case "ArrowRight":
        World.player?.setDirection("RIGHT");
        break;
      case "ArrowLeft":
        World.player?.setDirection("LEFT");
        break;
    }
  };

  const handleKeyUp = (e: { code: string }) => {
    switch (e.code) {
      default:
        World.player?.setDirection(null);
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
