import { useRef, useEffect, useState } from "react";
import { Canvas } from "../Canvas";
import { Dev } from "../DevMode";

import Box from "@material-ui/core/Box";
import World from "../../characters/World";
import Levels from "../../levels";
import { useAppSelector } from "../../hooks";
import { getMultiplayer } from "../../store/gameSlice";
import { context, context2 } from "../Canvas/canvas";

export const Game = () => {
  const multiplayer = useAppSelector(getMultiplayer);
  const requestIdRef = useRef(null as null | number);

  let frame = 0;

  const draw = () => {
    if (frame === 0) {
      World.tick();
    }

    if (World.player2) {
      World.draw2(context2!, frame);
    }
    World.draw(context!, frame);
    frame = frame < 6 ? frame + 1 : 0;

    requestIdRef.current = window.requestAnimationFrame(draw);
  };

  useEffect(() => {
    World.setMap(Levels[1]);
    draw();

    return () => {
      window.cancelAnimationFrame(requestIdRef.current!);
    };
  }, []);

  useEffect(() => {
    World.viewport_w = multiplayer ? window.innerWidth / 2 : window.innerWidth;
    World.width = multiplayer
      ? window.innerWidth / 32 / 2
      : window.innerWidth / 32;
    if (multiplayer) World.setMultiplayer();
    else World.resetMultiplayer();
  }, [multiplayer]);

  return (
    <Box display="flex" flexDirection="row-reverse">
      <Canvas player={1} />
      {multiplayer && <Canvas player={2} />}
    </Box>
  );
};
