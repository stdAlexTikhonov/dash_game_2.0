import { useRef, useEffect, useState } from "react";
import ground from "../../assets/images/ground.png";
import GameStore from "../../store/GameStore";

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width] = useState(window.innerWidth);
  const [height] = useState(document.body.clientHeight);
  const requestIdRef = useRef(null as null | number);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const image = new Image();

  const renderFrame = () => {
    context!.fillRect(0, 0, width, height);

    GameStore.level_map!.forEach((row, j) => {
      row.forEach((cell, i) => {
        if (cell === ".") context!.drawImage(image, i * 32, j * 32, 32, 32);
      });
    });
  };

  const tick = () => {
    if (!context) return;

    renderFrame();
    requestIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (canvasRef.current)
      setContext((_) => canvasRef.current!.getContext("2d"));

    return () => {
      cancelAnimationFrame(requestIdRef!.current!);
    };
  }, []);

  useEffect(() => {
    image.src = ground;
    requestAnimationFrame(tick);
  }, [context]);

  return <canvas width={width} height={height} ref={canvasRef} />;
};
