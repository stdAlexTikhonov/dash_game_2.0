import React, { useEffect } from "react";
import GameStore from "../../store/GameStore";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core/styles";

export const Dev = observer(() => {
  const classes = useStyles();
  useEffect(() => {
    const interval = setInterval(() => {
      GameStore.updateState();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <pre className={classes.pre}>
      {GameStore.level_map &&
        GameStore.level_map.map((item) => item.join(" ")).join("\n\r")}
    </pre>
  );
});

const useStyles = makeStyles(() => ({
  pre: {
    background: "white",
    margin: "auto",
    fontFamily: "monospace",
    fontSize: 25,
  },
}));
