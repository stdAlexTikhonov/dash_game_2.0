import { useRef, useEffect, useState } from "react";
import { Canvas } from "../Canvas";
import { Dev } from "../DevMode";
import GameStore from "../../store/GameStore";
import { observer } from "mobx-react-lite";
import Box from "@material-ui/core/Box";

export const Game = observer(() => {
  const [count, setCount] = useState(0);
  const { devMode, multiplayer } = GameStore;
  const [width, setWidth] = useState(
    multiplayer ? window.innerWidth / 2 : window.innerWidth
  );
  const [height] = useState(document.body.clientHeight);
  const requestIdRef = useRef(null as null | number);

  const tick = () => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state

    setCount((prevCount) => prevCount + 1);

    requestIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    setWidth(multiplayer ? window.innerWidth / 2 : window.innerWidth);
  }, [multiplayer]);

  useEffect(() => {
    tick();
    return () => {
      cancelAnimationFrame(requestIdRef!.current!);
    };
  }, []);

  useEffect(() => {
    if (count % 5 === 0) GameStore.updateState();
  }, [count]);

  return devMode ? (
    <Dev />
  ) : (
    <Box display="flex">
      <Canvas count={count} width={width} height={height} />
      {multiplayer && <Canvas count={count} width={width} height={height} />}
    </Box>
  );
});
