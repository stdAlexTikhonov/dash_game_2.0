import GameObject from "./GameObject";
import electron from "../assets/images/electron.png";
console.log(electron);

const BLOCK_WIDTH = 32;

export default class Electron extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "Z");
    this.img.src = electron;
  }

  draw(
    context: CanvasRenderingContext2D,
    viewport_start_y: number,
    viewport_start_x: number
  ) {
    context!.drawImage(
      this.img,
      0,
      0,
      BLOCK_WIDTH,
      BLOCK_WIDTH,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }
}
