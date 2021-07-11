import GameObject from "./GameObject";
import World from "./World";
import move from "../assets/audio/move.mp3";
import { BLOCK_WIDTH } from "../utils/constansts";

export default class MovableObject extends GameObject {
  movable_left: boolean = false;
  movable_right: boolean = false;
  movable_up: boolean = false;
  movable_down: boolean = false;
  vertical: boolean = false;
  static move_sound: HTMLMediaElement = new Audio(move);

  constructor(y: number, x: number, char: string, vertical: boolean = true) {
    super(y, x, char);
    this.vertical = vertical;
  }

  play_sound() {
    MovableObject.move_sound.currentTime = 0;
    MovableObject.move_sound.play();
  }

  updateState() {
    super.updateState();

    this.movable_right = false;
    this.movable_left = false;
    this.movable_up = false;
    this.movable_down = false;
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
    this.pos_y_up =
      this.movable_up && World.player!.move
        ? -((BLOCK_WIDTH / 6) * value - BLOCK_WIDTH)
        : 0;

    this.pos_y_down =
      this.movable_down && World.player!.move
        ? (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH
        : 0;

    this.pos_x_left =
      this.movable_left && World.player!.move
        ? -((BLOCK_WIDTH / 6) * value - BLOCK_WIDTH)
        : 0;

    this.pos_x_right =
      this.movable_right && World.player!.move
        ? (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH
        : 0;

    super.draw(
      context,
      direction,
      animation,
      viewport_start_y,
      viewport_start_x,
      value,
      state,
      dy
    );
  }
}
