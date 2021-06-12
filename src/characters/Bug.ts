import GameObject from "./GameObject";
import bug from "../assets/images/bug.png";
import { getPosition } from "../utils/helpers";
import World from "./World";

const BLOCK_WIDTH = 32;

export default class Bug extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "B");
    this.img.src = bug;
  }

  draw(
    context: CanvasRenderingContext2D,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    const state6 = World.counter % 6;
    const { pos_y, pos_x } = getPosition(
      World.player!.direction,
      World.player!.animation,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      value
    );

    context!.drawImage(
      this.img,
      state6 * BLOCK_WIDTH,
      0,
      BLOCK_WIDTH,
      BLOCK_WIDTH,
      pos_x,
      pos_y,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }
}
