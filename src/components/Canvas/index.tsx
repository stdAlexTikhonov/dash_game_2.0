import { useRef, useEffect, useState } from "react";
import ground from "../../assets/images/ground.png";
import merphy from "../../assets/images/merphy.png";
import wall from "../../assets/images/wall.png";
import ram from "../../assets/images/ram.png";
import rock from "../../assets/images/rock.png";
import food from "../../assets/images/food.png";
import exit from "../../assets/images/exit.png";
import scissors from "../../assets/images/scissors.png";
import electron from "../../assets/images/electron.png";
import ram2 from "../../assets/images/RAM2.png";
import ram3 from "../../assets/images/RAM3.png";
import bug from "../../assets/images/bug.png";
import computer from "../../assets/images/computer.png";
import orange_disk from "../../assets/images/orange_disk.png";
import yellow_disk from "../../assets/images/yellow_disk.png";
import portal_right from "../../assets/images/portal_right.png";
import portal_left from "../../assets/images/portal_left.png";
import P from "../../assets/images/P.png";
import W from "../../assets/images/W.png";
import N from "../../assets/images/N.png";
import L from "../../assets/images/L.png";
import M from "../../assets/images/M.png";
import GameStore from "../../store/GameStore";
import { BLOCK_WIDTH } from "../../utils/constansts";
import { observer } from "mobx-react-lite";

export const Canvas = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width] = useState(window.innerWidth);
  const [height] = useState(document.body.clientHeight);
  const [viewport_width] = useState(Math.floor(width / BLOCK_WIDTH));
  const [viewport_height] = useState(Math.floor(height / BLOCK_WIDTH));
  const [count, setCount] = useState(0);
  const requestIdRef = useRef(null as null | number);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const ground_img = new Image();
  const merphy_img = new Image();

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
            context!.drawImage(
              ground_img,
              pos_x,
              pos_y,
              BLOCK_WIDTH,
              BLOCK_WIDTH
            );

          if (cell === "A")
            context!.drawImage(
              merphy_img,
              0,
              BLOCK_WIDTH,
              BLOCK_WIDTH,
              BLOCK_WIDTH,
              pos_x,
              pos_y,
              BLOCK_WIDTH,
              BLOCK_WIDTH
            );
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
    ground_img.src = ground;
    merphy_img.src = merphy;
    requestAnimationFrame(tick);
  }, [context]);

  return <canvas width={width} height={height} ref={canvasRef} />;
});
