import { getPosition } from "../utils/helpers";
import { BLOCK_WIDTH } from "../utils/constansts";
export default class GameObject {
  x: number;
  y: number;
  char: string;
  img: HTMLImageElement = new Image();
  pos_y: number = 0;
  pos_x_left: number = 0;
  pos_x_right: number = 0;

  constructor(y: number, x: number, char: string) {
    this.y = y;
    this.x = x;
    this.char = char;
  }

  draw(
    context: CanvasRenderingContext2D,
    direction: string,
    animation: boolean,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number,
    state: number = 0,
    dy: number = 0
  ) {
    const { pos_y, pos_x } = getPosition(
      direction,
      animation,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      value
    );

    context!.drawImage(
      this.img,
      state * BLOCK_WIDTH,
      dy,
      BLOCK_WIDTH,
      BLOCK_WIDTH,
      pos_x + this.pos_x_left + this.pos_x_right,
      pos_y + this.pos_y,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }

  updateState() {
    return;
  }
}
