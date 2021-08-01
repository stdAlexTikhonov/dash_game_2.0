import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import image from "../../assets/images/infotron.png";
import bomb from "../../assets/images/bomb.png";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useAppSelector } from "../../hooks";
import { getScore, getMaxScore, getBombs } from "../../store/playerSlice";
import { getTime } from "../../store/gameSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontSize: 20,
      color: "red",
      marginLeft: 10,
    },
    block: {
      background: "black",
      padding: 5,
      width: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

const format_value = (value: number) => (value >= 10 ? value : "0" + value);

export const ControlPanel = () => {
  const classes = useStyles();
  const score = useAppSelector(getScore);
  const max_score = useAppSelector(getMaxScore);
  const bombs = useAppSelector(getBombs);
  const time = useAppSelector(getTime);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <Box
      width="100%"
      position="absolute"
      bottom="0px"
      display="flex"
      justifyContent="flex-end"
    >
      <Box
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Typography variant="h5" className={classes.text}>
          {format_value(minutes)}:{format_value(seconds)}
        </Typography>
      </Box>
      <Box className={classes.block}>
        <img src={image} alt="infotron" width={18} height={18} />
        <Typography variant="h5" className={classes.text}>
          {score} / {max_score}
        </Typography>
      </Box>
      <Box className={classes.block}>
        <img src={bomb} alt="bombs" width={18} height={18} />
        <Typography variant="h5" className={classes.text}>
          {bombs}
        </Typography>
      </Box>
    </Box>
  );
};
