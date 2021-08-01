import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useAppSelector } from "../../hooks";
import { store } from "../../store/store";
import { getTime, updateTime } from "../../store/gameSlice";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontSize: 20,
      color: "red",
      marginLeft: 10,
    },
  })
);

const format_value = (value: number) => (value >= 10 ? value : "0" + value);

export const Timer = () => {
  const classes = useStyles();
  const time = useAppSelector(getTime);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      store.dispatch(updateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Typography variant="h5" className={classes.text}>
      {format_value(minutes)}:{format_value(seconds)}
    </Typography>
  );
};
