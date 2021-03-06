import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import Divider from "@material-ui/core/Divider";
import CodeIcon from "@material-ui/icons/Code";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MusicOffIcon from "@material-ui/icons/MusicOff";
import ClearIcon from "@material-ui/icons/Clear";
import {
  toggleMultiplayer,
  getMultiplayer,
  getMusic,
  toggleMusic,
  getDev,
  toggleDev,
} from "../../store/gameSlice";
import { togglePlayerReady, getRender } from "../../store/playerSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

export const TemporaryDrawer = () => {
  const history = useHistory();
  const dispath = useAppDispatch();
  const multiplayer = useAppSelector(getMultiplayer);
  const is_rendered = useAppSelector(getRender);
  const music = useAppSelector(getMusic);
  const dev = useAppSelector(getDev);
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      if (is_rendered) dispath(togglePlayerReady());
      setState({ ...state, [anchor]: open });
    };

  const handleMultiplayer = () => dispath(toggleMultiplayer());

  const handleMusic = () => dispath(toggleMusic());

  const handleDevMode = () => dispath(toggleDev());

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={"key_game"} onClick={() => history.push("/")}>
          <ListItemIcon>{<PlayArrowIcon />}</ListItemIcon>
          <ListItemText primary={"New Game"} />
        </ListItem>
        <ListItem
          button
          key={"key_levels"}
          onClick={() => history.push("/levels")}
        >
          <ListItemIcon>{<AppsIcon />}</ListItemIcon>
          <ListItemText primary={"Level List"} />
        </ListItem>
        <ListItem
          button
          key={"key_settings"}
          onClick={() => history.push("/settings")}
        >
          <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItem>
      </List>
    </div>
  );

  const actions = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={"key_mult"} onClick={handleMultiplayer}>
          <ListItemIcon>
            {multiplayer ? <PersonAddDisabledIcon /> : <PersonAddIcon />}
          </ListItemIcon>
          <ListItemText primary={"Second player"} />
        </ListItem>
        <ListItem button key={"key_dev"} onClick={handleDevMode}>
          <ListItemIcon>{dev ? <ClearIcon /> : <CodeIcon />}</ListItemIcon>
          <ListItemText primary={"Development mode"} />
        </ListItem>
        <ListItem button key={"key_music"} onClick={handleMusic}>
          <ListItemIcon>
            {music ? <MusicNoteIcon /> : <MusicOffIcon />}
          </ListItemIcon>
          <ListItemText primary={"Music"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {(["right"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <Divider />
            {actions(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
