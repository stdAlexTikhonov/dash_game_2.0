import GameObject from "./GameObject";
import World from "./World";
import { BLOCK_WIDTH } from "../utils/constansts";
import fall from "../assets/audio/fall.mp3";

export default class FallingObject extends GameObject {
  falling: boolean = false;
  left: boolean = false;
  right: boolean = false;
  static audio: HTMLMediaElement = new Audio(fall);
  ready_to_play: boolean = false;

  check_way_down() {
    const { world_map } = World;
    return world_map[this.y + 1]
      ? world_map[this.y + 1][this.x] === " "
      : false;
  }

  check_way_right() {
    const { world_map } = World;
    return world_map[this.y - 1]
      ? world_map[this.y][this.x + 1] === " " &&
          world_map[this.y + 1][this.x + 1] === " " &&
          !["O", "*"].includes(world_map[this.y - 1][this.x + 1])
      : world_map[this.y][this.x + 1] === " " &&
          world_map[this.y + 1][this.x + 1] === " ";
  }

  check_way_left() {
    const { world_map } = World;
    return world_map[this.y - 1]
      ? world_map[this.y][this.x - 1] === " " &&
          world_map[this.y + 1][this.x - 1] === " " &&
          !["O", "*"].includes(world_map[this.y - 1][this.x - 1]) &&
          !(
            ["O", "*"].includes(world_map[this.y][this.x - 2]) &&
            ["+", "O", "*", "R", "U", "3", "4"].includes(
              world_map[this.y + 1][this.x - 2]
            )
          )
      : world_map[this.y][this.x - 1] === " " &&
          world_map[this.y + 1][this.x - 1] === " ";
  }

  move_possible() {
    const { world_map } = World;

    return world_map[this.y + 1]
      ? ["+", "O", "*", "R", "U", "3", "4"].includes(
          world_map[this.y + 1][this.x]
        )
      : false;
  }

  updateState() {
    if (this.check_way_down()) {
      this.falling = true;
      this.right = false;
      this.left = false;
      this.ready_to_play = true;
      this.y += 1;
    } else if (this.move_possible() && this.check_way_left()) {
      this.x -= 1;
      this.left = true;
      this.falling = false;
      if (this.ready_to_play) {
        FallingObject.audio.currentTime = 0;
        FallingObject.audio.play();
      }
    } else if (this.move_possible() && this.check_way_right()) {
      this.x += 1;
      this.right = true;
      this.falling = false;
      if (this.ready_to_play) {
        FallingObject.audio.currentTime = 0;
        FallingObject.audio.play();
      }
    } else {
      this.falling = false;

      if (this.ready_to_play) {
        FallingObject.audio.currentTime = 0;
        FallingObject.audio.play();
      }
      this.ready_to_play = false;
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
    this.pos_y = this.falling ? (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH : 0;
    this.pos_x_left = this.left
      ? -((BLOCK_WIDTH / 6) * value - BLOCK_WIDTH)
      : 0;
    this.pos_x_right = this.right ? (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH : 0;

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
