import React from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      color: theme.palette.common.white,
      textAlign: "center",
    },
  })
);
export const LevelList = () => {
  const classes = useStyles();

  return (
    <Box width="100%">
      <h1 className={classes.header}>Level List</h1>
    </Box>
  );
};
