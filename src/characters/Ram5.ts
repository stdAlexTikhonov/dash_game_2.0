import GameObject from "./GameObject";
import ram5 from "../assets/images/RAM_5.png";

const BLOCK_WIDTH = 32;

export default class Ram5 extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "4");
    this.img.src = ram5;
  }

  draw(
    context: CanvasRenderingContext2D,
    viewport_start_y: number,
    viewport_start_x: number
  ) {
    context!.drawImage(
      this.img,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }
}
