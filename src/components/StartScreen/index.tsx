import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import World from "../../characters/World";
import Levels from "../../levels";
import "./styles.css";

export const StartScreen = () => {
  useEffect(() => {
    World.setMap(Levels[0]);
  }, []);
  const classes = useStyles();
  return (
    <Link to="/game" className={classes.press_start}>
      <h1>Press to start</h1>
    </Link>
  );
};
