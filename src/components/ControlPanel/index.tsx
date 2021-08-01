import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import image from "../../assets/images/infotron.png";
import bomb from "../../assets/images/bomb.png";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useAppSelector } from "../../hooks";
import { getScore, getMaxScore, getBombs } from "../../store/playerSlice";

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
      width: 90,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export const ControlPanel = () => {
  const classes = useStyles();
  const score = useAppSelector(getScore);
  const max_score = useAppSelector(getMaxScore);
  const bombs = useAppSelector(getBombs);

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
          00:00
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
