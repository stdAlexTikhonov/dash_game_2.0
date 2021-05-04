import React from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";
import Levels from "../../levels";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      color: theme.palette.common.white,
      textAlign: "center",
    },
    card: {
      margin: 20,
      minWidth: 200,
      minHeight: 200,
      cursor: "pointer",
      fontSize: 30,
      fontWeight: "bold",
      border: "1px solid white",
      color: "white",
    },
    block: {
      display: "flex",
      flexWrap: "wrap",
      // background: "white",
      width: "100%",
      alignItems: "flex-start",
      alignContent: "flex-start",
    },
  })
);

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const LevelList = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.block}>
      {levels.map((item, i) => (
        <Button
          key={i}
          className={classes.card}
          onClick={() => {
            // GameStore.setLevel(i);
            // GameStore.setLevelMap(Levels[i]);
            history.push("/");
          }}
        >
          {i}
        </Button>
      ))}
    </Box>
  );
};
