import FallingObject from "./FallingObject";
import World from "./World";
import move from "../assets/audio/move.mp3";
import { BLOCK_WIDTH } from "../utils/constansts";
import { Player } from "./Player";

export default class MovableFallingObject extends FallingObject {
  movable_left: boolean = false;
  movable_right: boolean = false;
  movable_up: boolean = false;
  movable_down: boolean = false;
  movable: boolean = true;
  static move_sound: HTMLMediaElement = new Audio(move);

  play_sound() {
    MovableFallingObject.move_sound.currentTime = 0;
    MovableFallingObject.move_sound.play();
  }

  updateState() {
    super.updateState();

    this.movable_right = false;
    this.movable_left = false;
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
    this.pos_x_left = this.movable_left
      ? -((BLOCK_WIDTH / 6) * value - BLOCK_WIDTH)
      : this.pos_x_left;

    this.pos_x_right = this.movable_right
      ? (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH
      : this.pos_x_right;

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
