import { useRef, useEffect } from "react";

export const Canvas = () => {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null as null | number);

  const renderFrame = () => {
    // ...
  };

  const tick = () => {
    if (!canvasRef.current) return;
    renderFrame();
    requestAnimationFrame(tick);
    requestIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current!);
    };
  }, []);

  return <canvas width={window.innerWidth} ref={canvasRef} />;
};
