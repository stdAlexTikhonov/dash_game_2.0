import FallingObject from "./FallingObject";
import World from "./World";
import move from "../assets/audio/move.mp3";
import { BLOCK_WIDTH } from "../utils/constansts";

export default class MovableFallingObject extends FallingObject {
  movable_left: boolean = false;
  movable_right: boolean = false;
  movable_up: boolean = false;
  movable_down: boolean = false;
  movable: boolean = true;
  empty_left: boolean = false;
  empty_right: boolean = false;
  player_left: boolean = false;
  player_right: boolean = false;
  move_left: boolean = false;
  move_right: boolean = false;
  static move_sound: HTMLMediaElement = new Audio(move);

  play_sound() {
    MovableFallingObject.move_sound.currentTime = 0;
    MovableFallingObject.move_sound.play();
  }

  look_around() {
    const left_object = this.check_left();
    const right_object = this.check_right();

    this.empty_left = !left_object;
    this.empty_right = !right_object;

    this.player_left =
      left_object &&
      left_object.char === "A" &&
      left_object.direction === "RIGHT";
    this.player_right =
      right_object &&
      right_object.char === "A" &&
      right_object.direction === "LEFT";

    this.movable_left = this.empty_left && this.player_right;
    this.movable_right = this.empty_right && this.player_left;
  }

  updateState() {
    super.updateState();
    this.look_around();
    if (this.move_left || this.move_right) this.play_sound();
  }

  check_left() {
    return World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x - 1
    );
  }

  check_right() {
    return World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x + 1
    );
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
    this.pos_x_left = this.move_left
      ? -((BLOCK_WIDTH / 6) * value - BLOCK_WIDTH)
      : this.pos_x_left;

    this.pos_x_right = this.move_right
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
