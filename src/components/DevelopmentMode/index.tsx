import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import World from "../../characters/World";

export const Dev = () => {
  const [, setCounter] = useState(0);
  const classes = useStyles();
  useEffect(() => {
    const interval = setInterval(() => {
      World.tick();
      setCounter((prev) => prev + 1);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <pre className={classes.pre}>
      {/* {World.world_map &&
        World.world_map.map((item) => item.join(" ")).join("\n\r")} */}
    </pre>
  );
};

const useStyles = makeStyles(() => ({
  pre: {
    background: "white",
    margin: "auto",
    fontFamily: "monospace",
    fontSize: 25,
  },
}));
