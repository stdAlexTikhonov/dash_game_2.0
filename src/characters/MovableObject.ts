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

  check_left() {
    const { world_map } = World;
    return (
      world_map[this.y][this.x - 1] === " " &&
      world_map[this.y][this.x + 1] === "A"
    );
  }

  check_right() {
    const { world_map } = World;
    return (
      world_map[this.y][this.x + 1] === " " &&
      world_map[this.y][this.x - 1] === "A"
    );
  }

  check_up() {
    const { world_map } = World;
    return (
      world_map[this.y - 1][this.x] === " " &&
      world_map[this.y + 1][this.x] === "A"
    );
  }

  check_down() {
    const { world_map } = World;
    return (
      world_map[this.y + 1][this.x] === " " &&
      world_map[this.y - 1][this.x] === "A"
    );
  }

  play_sound() {
    MovableObject.move_sound.currentTime = 0;
    MovableObject.move_sound.play();
  }

  updateState() {
    super.updateState();

    if (this.check_left() && World.player!.direction === "LEFT") {
      this.movable_left = true;

      if (this.x === World.player!.x) {
        this.x -= 1;
        this.play_sound();
      }
    } else if (this.check_right() && World.player!.direction === "RIGHT") {
      this.movable_right = true;

      if (this.x === World.player!.x) {
        this.x += 1;
        this.play_sound();
      }
    } else if (
      this.vertical &&
      this.check_up() &&
      World.player!.direction === "UP"
    ) {
      this.movable_up = true;
      if (this.y === World.player!.y) {
        this.y -= 1;
        this.play_sound();
      }
    } else if (
      this.vertical &&
      this.check_down() &&
      World.player!.direction === "DOWN"
    ) {
      this.movable_down = true;
      if (this.y === World.player!.y) {
        this.y += 1;
        this.play_sound();
      }
    } else {
      this.movable_right = false;
      this.movable_left = false;
      this.movable_up = false;
      this.movable_down = false;
    }
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
