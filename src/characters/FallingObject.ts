import GameObject from "./GameObject";
import EmptyBlock from "./EmptyBlock";
import World from "./World";
import { BLOCK_WIDTH } from "../utils/constansts";
import fall from "../assets/audio/fall.mp3";

export default class FallingObject extends GameObject {
  falling: boolean = false;
  left: boolean = false;
  right: boolean = false;
  static audio: HTMLMediaElement = new Audio(fall);
  ready_to_play: boolean = false;
  fallen: boolean = false;

  check_way_down() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y + 1 && item.x === this.x
    );

    return this.y < World.world_map.length - 1 ? !obj : false;
  }

  check_way_right() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.x === this.x + 1 && [this.y, this.y + 1].includes(item.y)
    );

    const top_obj = World.GAME_OBJECTS.find(
      (item) => item.x === this.x + 1 && item.y === this.y - 1
    );

    if (top_obj && (top_obj.falling || top_obj.direction === "DOWN"))
      return false;
    else return this.x < World.world_map[0].length - 1 ? !obj : false;
  }

  check_way_left() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.x === this.x - 1 && [this.y, this.y + 1].includes(item.y)
    );

    const top_obj = World.GAME_OBJECTS.find(
      (item) => item.x === this.x - 1 && item.y === this.y - 1
    );

    if (top_obj && (top_obj.falling || top_obj.direction === "DOWN"))
      return false;
    else return this.x > 0 ? !obj : false;
  }

  move_possible() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y + 1 && item.x === this.x
    );

    return this.y < World.world_map.length - 1
      ? ["+", "O", "*", "R", "U", "3", "4"].includes(obj.char)
      : false;
  }

  detonate_under() {
    const under_object = World.GAME_OBJECTS.find(
      (item) => item.x === this.x && item.y === this.y + 1
    );

    if (under_object && under_object.detonate) under_object.detonate();
  }

  updateState() {
    if (this.check_way_down()) {
      this.falling = true;
      this.right = false;
      this.left = false;
      this.ready_to_play = true;
      World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
      this.y += 1;
    } else if (this.move_possible() && this.check_way_left()) {
      World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
      this.x -= 1;
      this.left = true;
      this.falling = false;
      if (this.ready_to_play) {
        FallingObject.audio.currentTime = 0;
        FallingObject.audio.play();
        this.fallen = true;
      }
    } else if (this.move_possible() && this.check_way_right()) {
      World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
      this.x += 1;
      this.right = true;
      this.falling = false;
      if (this.ready_to_play) {
        FallingObject.audio.currentTime = 0;
        FallingObject.audio.play();
        this.fallen = true;
      }
    } else {
      this.falling = false;

      if (this.ready_to_play) {
        FallingObject.audio.currentTime = 0;
        FallingObject.audio.play();
        this.fallen = true;
        this.detonate_under();
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
    this.pos_y_down = this.falling
      ? (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH
      : 0;
    this.pos_x_left = this.left
      ? -((BLOCK_WIDTH / 6) * value - BLOCK_WIDTH)
      : this.pos_x_left;
    this.pos_x_right = this.right
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
