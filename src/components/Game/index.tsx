import { useRef, useEffect, useState } from "react";
import { Canvas } from "../Canvas";
import { Dev } from "../DevMode";
import GameStore from "../../store/GameStore";
import { observer } from "mobx-react-lite";

export const Game = observer(() => {
  const [count, setCount] = useState(0);
  const requestIdRef = useRef(null as null | number);

  const tick = () => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    setCount((prevCount) => prevCount + 1);

    requestIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    tick();
    return () => {
      cancelAnimationFrame(requestIdRef!.current!);
    };
  }, []);
  return GameStore.devMode ? <Dev /> : <Canvas count={count} />;
});
