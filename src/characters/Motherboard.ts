import GameObject from "./GameObject";
import ground from "../assets/images/ground.png";
import World from "./World";
import { getPosition } from "../utils/helpers";

const BLOCK_WIDTH = 32;

export default class Motherboard extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, ".");
    this.img.src = ground;
  }

  draw(
    context: CanvasRenderingContext2D,
    direction: string,
    animation: boolean,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    const { pos_y, pos_x } = getPosition(
      direction,
      animation,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      value
    );

    context!.drawImage(this.img, pos_x, pos_y, BLOCK_WIDTH, BLOCK_WIDTH);
  }
}
