import { useRef, useEffect, useState, useMemo } from "react";
import World from "../../characters/World";
import { useAppSelector } from "../../hooks";
import { getMultiplayer } from "../../store/gameSlice";

type Props = { player: number };
export const Canvas: React.FC<Props> = ({ player }) => {
  const count = World.counter;
  const multiplayer = useAppSelector(getMultiplayer);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current)
      setContext((_) => canvasRef.current!.getContext("2d"));

    if (context) {
      switch (player) {
        case 1:
          World.draw(context, 0);
          break;
        case 2:
          World.draw2(context);
          break;
      }
    }
  }, [count, context]);

  return (
    <canvas
      width={multiplayer ? window.innerWidth / 2 : window.innerWidth}
      height={window.innerHeight}
      ref={canvasRef}
    />
  );
};
