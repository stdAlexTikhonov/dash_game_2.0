import FallingObject from "./FallingObject";
import rock from "../assets/images/rock.png";
import { BLOCK_WIDTH } from "../utils/constansts";

export default class Rock extends FallingObject {
  img: HTMLImageElement = new Image();
  state: number = 0;

  constructor(y: number, x: number) {
    super(y, x, "O");
    this.img.src = rock;
  }

  draw(
    context: CanvasRenderingContext2D,
    direction: string,
    animation: boolean,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    super.draw(
      context,
      direction,
      animation,
      viewport_start_y,
      viewport_start_x,
      value,
      this.left || this.right ? this.state % 4 : 0,
      this.right ? BLOCK_WIDTH : 0
    );
    this.state += 1;
  }
}
