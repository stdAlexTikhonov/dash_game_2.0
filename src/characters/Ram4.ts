import GameObject from "./GameObject";
import ram4 from "../assets/images/RAM_4.png";

const BLOCK_WIDTH = 32;

export default class Ram4 extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "3");
    this.img.src = ram4;
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
