import Predator from "./Predator";
import electron from "../assets/images/electron.png";
import { getPosition, getPlayerPosition } from "../utils/helpers";
import World from "./World";

const BLOCK_WIDTH = 32;

export default class Electron extends Predator {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "Z");
    this.img.src = electron;
  }

  draw(
    context: CanvasRenderingContext2D,
    direction: string,
    animation: boolean,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    const state6 = World.counter % 6;

    const { pos_y, pos_x } = getPosition(
      direction,
      animation,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      value
    );

    const { pos_y: pos_y_plus, pos_x: pos_x_plus } = getPlayerPosition(
      this.dir,
      this.animation,
      pos_x,
      pos_y,
      value
    );

    context!.drawImage(
      this.img,
      state6 * BLOCK_WIDTH,
      0,
      BLOCK_WIDTH,
      BLOCK_WIDTH,
      pos_x_plus,
      pos_y_plus,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }
}
