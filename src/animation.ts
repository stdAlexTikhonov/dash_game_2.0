import World from "./characters/World";
import { context } from "./components/Canvas/canvas";

let frame = 0;

export const draw = () => {
  if (frame === 0) {
    World.tick();
  }

  World.draw(context!, frame);
  frame = frame < 6 ? frame + 1 : 0;

  window.requestAnimationFrame(draw);
};
