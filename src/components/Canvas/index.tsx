import { useRef, useEffect, useState, useMemo } from "react";
import World from "../../characters/World";

export const Canvas = () => {
  const count = World.counter;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current)
      setContext((_) => canvasRef.current!.getContext("2d"));

    if (context) World.draw(context);
  }, [count, context]);

  return (
    <canvas
      width={window.innerWidth}
      height={document.body.clientHeight}
      ref={canvasRef}
    />
  );
};
