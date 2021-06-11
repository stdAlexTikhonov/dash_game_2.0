import GameObject from "./GameObject";
import ground from "../assets/images/ground.png";

const BLOCK_WIDTH = 32;

export default class Motherboard extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x);
    this.img.src = ground;
  }

  draw(
    context: CanvasRenderingContext2D,
    viewport_start_x: number,
    viewport_start_y: number
  ) {
    context!.drawImage(
      this.img,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }

  updateState() {
    return;
  }
}
