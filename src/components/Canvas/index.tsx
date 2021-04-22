import { useRef, useEffect, useState } from "react";
import ground from "../../assets/images/ground.png";
import GameStore from "../../store/GameStore";
import { BLOCK_WIDTH } from "../../utils/constansts";
import { observer } from "mobx-react-lite";
import { ContactSupportOutlined } from "@material-ui/icons";

export const Canvas = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width] = useState(window.innerWidth);
  const [height] = useState(document.body.clientHeight);
  const [viewport_width] = useState(Math.floor(width / BLOCK_WIDTH));
  const [viewport_height] = useState(Math.floor(height / BLOCK_WIDTH));
  const [count, setCount] = useState(0);
  const requestIdRef = useRef(null as null | number);
  const previousTimeRef = useRef(0);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const image = new Image();

  const renderFrame = () => {
    context!.fillRect(0, 0, width, height);
    const viewport_start_x =
      GameStore.player1.x - Math.floor(viewport_width / 2);
    const viewport_start_y =
      GameStore.player1.y - Math.floor(viewport_height / 2);
    const viewport_end_x = viewport_start_x + viewport_width;
    const viewport_end_y = viewport_start_y + viewport_height;

    GameStore.level_map!.forEach((row, j) => {
      const draw_view_y_flag = j >= viewport_start_y - 1 && j <= viewport_end_y;
      row.forEach((cell, i) => {
        const draw_view_x_flag =
          i >= viewport_start_x - 1 && i <= viewport_end_x;

        if (draw_view_y_flag && draw_view_x_flag) {
          let pos_x = (i - viewport_start_x) * BLOCK_WIDTH;
          let pos_y = (j - viewport_start_y) * BLOCK_WIDTH;
          if (cell === ".")
            context!.drawImage(image, pos_x, pos_y, BLOCK_WIDTH, BLOCK_WIDTH);
        }
      });
    });
  };

  const tick = (time: any) => {
    if (!context) return;

    renderFrame();

    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    setCount((prevCount) => prevCount + 1);

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
    if (count % 5 === 0) GameStore.updateState();
  }, [count]);

  useEffect(() => {
    image.src = ground;
    requestAnimationFrame(tick);
  }, [context]);

  return <canvas width={width} height={height} ref={canvasRef} />;
});
