import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { setLevel } from "../../store/gameSlice";
import { useAppDispatch } from "../../hooks";
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
      overflow: "auto",
      paddingBottom: "35px",
      width: "100%",
      alignItems: "flex-start",
      alignContent: "flex-start",
    },
  })
);

export const LevelList = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useAppDispatch();

  return (
    <Box className={classes.block}>
      {Levels.map((item, i) => (
        <Button
          key={i}
          className={classes.card}
          onClick={() => {
            dispatch(setLevel(i));
            history.push("/");
          }}
        >
          {i + 1}
        </Button>
      ))}
    </Box>
  );
};
