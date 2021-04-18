import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import "./styles.css";

export const StartScreen = () => {
  const classes = useStyles();
  return (
    <Link to="/home" className={classes.press_start}>
      <h1>Press to start</h1>
    </Link>
  );
};
