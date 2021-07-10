import { useRef, useEffect } from "react";
import { Canvas } from "../Canvas";
import { Dev } from "../DevelopmentMode";

import Box from "@material-ui/core/Box";
import World from "../../characters/World";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getMultiplayer, getDev } from "../../store/gameSlice";
import { getPlayer, setFirstRender } from "../../store/playerSlice";
import { context, context2 } from "../Canvas/canvas";

export const Game = () => {
  const dispatch = useAppDispatch();
  const multiplayer = useAppSelector(getMultiplayer);
  const is_player_ready = useAppSelector(getPlayer);
  const requestIdRef = useRef(null as null | number);
  const dev = useAppSelector(getDev);

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
    dispatch(setFirstRender());
    if (is_player_ready && !dev) draw();

    return () => {
      if (!dev) window.cancelAnimationFrame(requestIdRef.current!);
    };
  }, [is_player_ready]);

  useEffect(() => {
    World.viewport_w = multiplayer ? window.innerWidth / 2 : window.innerWidth;
    World.width = multiplayer
      ? window.innerWidth / 32 / 2
      : window.innerWidth / 32;
    if (multiplayer) World.setMultiplayer();
    else World.resetMultiplayer();
  }, [multiplayer]);

  return dev ? (
    <Dev />
  ) : (
    <Box display="flex" flexDirection="row-reverse">
      <Canvas player={1} />
      {multiplayer && <Canvas player={2} />}
    </Box>
  );
};
