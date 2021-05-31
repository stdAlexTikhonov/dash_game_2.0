import { Routes } from "../../routes";
import Box from "@material-ui/core/Box";
import AppBar from "../AppBar";
import { useAppSelector } from "../../hooks";
import { getMusic } from "../../store/gameSlice";
import { useEffect } from "react";
import { Howl, Howler } from "howler";
import background from "../../assets/audio/background.mp3";

const sound = new Howl({
  src: [background],
});

const App = () => {
  const music = useAppSelector(getMusic);

  useEffect(() => {
    if (music) sound.play();
    else sound.pause();
  }, [music]);
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      bgcolor="black"
      tabIndex={0}
      // onKeyDown={handleKeyDown}
      // onKeyUp={handleKeyUp}
    >
      <AppBar />
      <Routes />
    </Box>
  );
};

export default App;
