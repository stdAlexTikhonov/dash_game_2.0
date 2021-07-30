import GameObject from "./GameObject";
import bug from "../assets/images/bug.png";
import { getPosition } from "../utils/helpers";
import World from "./World";

const BLOCK_WIDTH = 32;

export default class Bug extends GameObject {
  img: HTMLImageElement = new Image();
  activate: boolean = false;
  counter: number = 0;
  state: number = 0;
  random: number = Math.random() * 21 + 10;

  constructor(y: number, x: number) {
    super(y, x, "B");
    this.img.src = bug;
  }

  check_player() {
    const { player } = World;

    if (player) {
      if (player.x === this.x && player.y === this.y)
        if (this.activate) this.finished = true;
        else player.detonate();
    }
  }

  updateState() {
    this.check_player();
    if (!this.activate && this.state === 5) this.activate = true;

    if (this.activate) {
      if (this.counter < this.random) {
        this.counter++;
      } else {
        this.counter = 0;
        this.activate = false;
      }
    }
  }

  draw(
    context: CanvasRenderingContext2D,
    direction: string,
    animation: boolean,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    this.state = World.counter % 6;
    const { pos_y, pos_x } = getPosition(
      direction,
      animation,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      value
    );

    context!.drawImage(
      this.img,
      this.activate ? 0 : this.state * BLOCK_WIDTH,
      0,
      BLOCK_WIDTH,
      BLOCK_WIDTH,
      pos_x,
      pos_y,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }
}
