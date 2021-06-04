import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import World from "../../characters/World";
import Levels from "../../levels";
import "./styles.css";

export const StartScreen = () => {
  useEffect(() => {
    fetch(Levels[4])
      .then((r) => r.text())
      .then((text) => {
        const arr = text.split("\r\n").map((row) => row.split(""));
        World.setMap(arr);
      });
  }, []);
  const classes = useStyles();
  return (
    <Link to="/game" className={classes.press_start}>
      <h1>Press to start</h1>
    </Link>
  );
};
