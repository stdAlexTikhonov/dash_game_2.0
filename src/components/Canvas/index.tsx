import { useRef, useEffect, useState, useMemo } from "react";
import World from "../../characters/World";
import { useAppSelector } from "../../hooks";
import { getMultiplayer } from "../../store/gameSlice";
import Box from "@material-ui/core/Box";
import { canvas } from "./canvas";

type Props = { player: number };
export const Canvas: React.FC<Props> = ({ player }) => {
  const multiplayer = useAppSelector(getMultiplayer);

  useEffect(() => {
    const box = document.getElementById("test");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(canvas);
    box?.appendChild(canvas);
  }, []);

  return (
    <Box
      width={multiplayer ? window.innerWidth / 2 : window.innerWidth}
      height={window.innerHeight}
      id="test"
    ></Box>
  );
};
