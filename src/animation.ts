import World from "./characters/World";
import { context, context2 } from "./components/Canvas/canvas";

let frame = 0;

export const draw = () => {
  if (frame === 0) {
    World.tick();
  }

  if (World.player2) {
    World.draw2(context2!, frame);
  }
  World.draw(context!, frame);
  frame = frame < 6 ? frame + 1 : 0;

  window.requestAnimationFrame(draw);
};
