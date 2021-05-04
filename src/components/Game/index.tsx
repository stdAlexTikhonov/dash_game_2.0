import { useRef, useEffect, useState } from "react";
import { Canvas } from "../Canvas";
import { Dev } from "../DevMode";

import Box from "@material-ui/core/Box";
import World from "../../characters/World";
import Levels from "../../levels";

export const Game = () => {
  const [count, setCount] = useState(0);

  const [height] = useState(document.body.clientHeight);
  const requestIdRef = useRef(null as null | number);

  const tick = () => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state

    setCount((prevCount) => prevCount + 1);

    requestIdRef.current = requestAnimationFrame(tick);
  };

  // useEffect(() => {
  //   setWidth(multiplayer ? window.innerWidth / 2 : window.innerWidth);
  // }, [multiplayer]);

  useEffect(() => {
    World.setMap(Levels[1]);
    tick();
    return () => {
      cancelAnimationFrame(requestIdRef!.current!);
    };
  }, []);

  useEffect(() => {
    if (count % 5 === 0) {
      World.tick();
    }
  }, [count]);

  return (
    <Box display="flex" flexDirection="row-reverse">
      <Canvas />
    </Box>
  );
};
