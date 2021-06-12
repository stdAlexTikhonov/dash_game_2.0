import GameObject from "./GameObject";
import ram3 from "../assets/images/RAM3.png";
import { getPosition } from "../utils/helpers";
import World from "./World";

const BLOCK_WIDTH = 32;

export default class Ram3 extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "U");
    this.img.src = ram3;
  }

  draw(
    context: CanvasRenderingContext2D,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    const { pos_y, pos_x } = getPosition(
      World.player!.direction,
      World.player!.animation,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      value
    );

    context!.drawImage(this.img, pos_x, pos_y, BLOCK_WIDTH, BLOCK_WIDTH);
  }
}
