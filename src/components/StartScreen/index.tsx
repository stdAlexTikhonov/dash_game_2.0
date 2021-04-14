import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";
import "./styles.css";

export const StartScreen = () => {
  const classes = useStyles();
  return (
    <Box height="100vh" width="100%" display="flex" bgcolor="black">
      <Link to="/home" className={classes.press_start}>
        <h1>Press to start</h1>
      </Link>
    </Box>
  );
};
