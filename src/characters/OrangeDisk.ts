import FallingObject from "./FallingObject";
import orange_disk from "../assets/images/orange_disk.png";

const BLOCK_WIDTH = 32;

export default class Infotron extends FallingObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "D");
    this.img.src = orange_disk;
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
