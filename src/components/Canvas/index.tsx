import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { getMultiplayer } from "../../store/gameSlice";
import Box from "@material-ui/core/Box";
import { canvas, canvas2 } from "./canvas";

type Props = { player: number };
export const Canvas: React.FC<Props> = ({ player }) => {
  const multiplayer = useAppSelector(getMultiplayer);

  useEffect(() => {
    const box = document.getElementById("test" + player);
    canvas.width = multiplayer ? window.innerWidth / 2 : window.innerWidth;
    canvas.height = window.innerHeight;
    canvas2.width = window.innerWidth / 2;
    canvas2.height = window.innerHeight;
    box?.appendChild(player === 1 ? canvas : canvas2);
  }, []);

  return (
    <Box
      width={multiplayer ? window.innerWidth / 2 : window.innerWidth}
      height={window.innerHeight}
      id={"test" + player}
    ></Box>
  );
};
