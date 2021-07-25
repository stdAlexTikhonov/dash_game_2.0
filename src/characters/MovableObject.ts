import GameObject from "./GameObject";
import World from "./World";
import move from "../assets/audio/move.mp3";
import { BLOCK_WIDTH } from "../utils/constansts";

export default class MovableObject extends GameObject {
  empty_left: boolean = false;
  empty_right: boolean = false;
  empty_up: boolean = false;
  empty_down: boolean = false;

  player_left: boolean = false;
  player_right: boolean = false;
  player_up: boolean = false;
  player_down: boolean = false;

  movable_up: boolean = false;
  movable_down: boolean = false;
  movable_left: boolean = false;
  movable_right: boolean = false;

  move_right: boolean = false;
  move_left: boolean = false;
  move_up: boolean = false;
  move_down: boolean = false;

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

  look_around() {
    const up_object = this.check_up();
    const down_object = this.check_down();
    const left_object = this.check_left();
    const right_object = this.check_right();

    this.empty_left = !left_object;
    this.empty_right = !right_object;
    this.empty_up = !up_object;
    this.empty_down = !down_object;

    this.player_left =
      left_object &&
      left_object.char === "A" &&
      left_object.direction === "RIGHT";
    this.player_right =
      right_object &&
      right_object.char === "A" &&
      right_object.direction === "LEFT";
    this.player_up =
      up_object && up_object.char === "A" && up_object.direction === "DOWN";
    this.player_down =
      down_object && down_object.char === "A" && down_object.direction === "UP";

    this.movable_up = this.empty_up && this.player_down;
    this.movable_down = this.empty_down && this.player_up;
    this.movable_left = this.empty_left && this.player_right;
    this.movable_right = this.empty_right && this.player_left;
  }

  check_up() {
    return World.GAME_OBJECTS.find(
      (item) => item.y === this.y - 1 && item.x === this.x
    );
  }

  check_down() {
    return World.GAME_OBJECTS.find(
      (item) => item.y === this.y + 1 && item.x === this.x
    );
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

  updateState() {
    super.updateState();
    this.look_around();
    if (this.move_down || this.move_up || this.move_left || this.move_right)
      this.play_sound();
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
    this.pos_y_up = this.move_up
      ? -((BLOCK_WIDTH / 6) * value - BLOCK_WIDTH)
      : 0;

    this.pos_y_down = this.move_down
      ? (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH
      : 0;

    this.pos_x_left = this.move_left
      ? -((BLOCK_WIDTH / 6) * value - BLOCK_WIDTH)
      : 0;

    this.pos_x_right = this.move_right
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
