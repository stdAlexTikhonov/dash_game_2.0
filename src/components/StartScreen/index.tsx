import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import GameStore from "../../store/GameStore";
import Levels from "../../levels";
import "./styles.css";

export const StartScreen = () => {
  useEffect(() => {
    GameStore.setLevelMap(Levels[GameStore.level]);
  }, []);
  const classes = useStyles();
  return (
    <Link to="/game" className={classes.press_start}>
      <h1>Press to start</h1>
    </Link>
  );
};
