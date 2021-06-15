import FallingObject from "./FallingObject";
import food from "../assets/images/food.png";
import World from "./World";
import { BLOCK_WIDTH } from "../utils/constansts";

export default class Infotron extends FallingObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "*");
    this.img.src = food;
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
      this.left || this.right ? World.counter % 8 : 0,
      this.left ? BLOCK_WIDTH : 0
    );
  }
}
