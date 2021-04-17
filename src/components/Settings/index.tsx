import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      color: theme.palette.common.white,
      textAlign: "center",
    },
  })
);

export const Settings = () => {
  const classes = useStyles();
  return (
    <Box width="100%">
      <h1 className={classes.header}>Settings</h1>
    </Box>
  );
};
