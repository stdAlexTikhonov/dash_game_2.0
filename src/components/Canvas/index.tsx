import { useRef, useEffect, useState } from "react";
import ground from "../../assets/images/ground.png";

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const requestIdRef = useRef(null as null | number);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const image = new Image();

  const renderFrame = () => {
    context!.drawImage(image, 0, 0, 32, 32);
  };

  const tick = () => {
    if (!context) return;

    renderFrame();
    // requestIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (canvasRef.current)
      setContext((_) => canvasRef.current!.getContext("2d"));

    return () => {
      cancelAnimationFrame(requestIdRef.current!);
    };
  }, []);

  useEffect(() => {
    image.src = ground;
    requestAnimationFrame(tick);
  }, [context]);

  return (
    <canvas
      width={window.innerWidth}
      height={document.body.clientHeight}
      ref={canvasRef}
    />
  );
};
