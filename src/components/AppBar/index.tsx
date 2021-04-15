import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "../Drawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row-reverse",
    },
    appBar: {
      background: "transparent",
    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
  })
);

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" className={classes.appBar} elevation={0}>
      <Toolbar variant="dense" className={classes.root}>
        <Drawer />
      </Toolbar>
    </AppBar>
  );
}
