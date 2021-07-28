import GameObject from "./GameObject";
import computer from "../assets/images/computer.png";
import { getPosition } from "../utils/helpers";
import World from "./World";

const BLOCK_WIDTH = 32;

export default class Bug extends GameObject {
  img: HTMLImageElement = new Image();
  activated: boolean = false;

  constructor(y: number, x: number) {
    super(y, x, "C");
    this.img.src = computer;
  }

  draw(
    context: CanvasRenderingContext2D,
    direction: string,
    animation: boolean,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    const state8 = World.counter % 8;
    const { pos_y, pos_x } = getPosition(
      direction,
      animation,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      value
    );

    context!.drawImage(
      this.img,
      state8 * BLOCK_WIDTH,
      this.activated ? BLOCK_WIDTH : 0,
      BLOCK_WIDTH,
      BLOCK_WIDTH,
      pos_x,
      pos_y,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }

  activate() {
    this.activated = true;
    World.GAME_OBJECTS.forEach((item) =>
      item.char === "Y" ? item.detonate() : null
    );
  }

  find_left() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x - 1
    );

    return obj;
  }

  find_right() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x + 1
    );

    return obj;
  }

  find_up() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y - 1 && item.x === this.x
    );
    return obj;
  }

  find_down() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y + 1 && item.x === this.x
    );
    return obj;
  }

  look_around() {
    const up = this.find_up();
    const down = this.find_down();
    const left = this.find_left();
    const right = this.find_right();

    if (up && up.char === "A" && up.direction === "DOWN") this.activate();
    if (down && down.char === "A" && down.direction === "UP") this.activate();
    if (left && left.char === "A" && left.direction === "RIGHT")
      this.activate();
    if (right && right.char === "A" && right.direction === "LEFT")
      this.activate();
  }

  updateState() {
    this.look_around();
  }
}
