import Bomb from "./Bomb";
import World from "./World";

export default class Predator extends Bomb {
  dir_down: boolean = true;
  dir_left: boolean = false;
  dir_up: boolean = false;
  dir_right: boolean = false;
  left_player: boolean = false;
  right_player: boolean = false;
  up_player: boolean = false;
  down_player: boolean = false;
  dir: string | null = "DOWN";
  prev_dir: string | null = null;
  animation: boolean = false;

  looking_around() {
    const left_object = this.check_left();
    const right_object = this.check_right();
    const up_object = this.check_up();
    const down_object = this.check_down();

    this.left_player = left_object && left_object.char === "A";
    this.right_player = right_object && right_object.char === "A";
    this.up_player = up_object && up_object.char === "A";
    this.down_player = down_object && down_object.char === "A";

    this.dir_left = this.x > 0 ? !left_object || this.left_player : false;
    this.dir_right =
      this.x < World.width - 1 ? !right_object || this.right_player : false;
    this.dir_up = this.y > 0 ? !up_object || this.up_player : false;
    this.dir_down =
      this.y < World.height - 1 ? !down_object || this.down_player : false;
  }

  check_dir() {
    this.animation = false;
    switch (this.dir) {
      case "DOWN":
        if (this.dir === this.prev_dir) {
          if (this.dir_right) this.dir = "RIGHT";
          else if (this.dir_down) this.dir = "DOWN";
          else this.dir = "LEFT";
        }
        this.prev_dir = "DOWN";
        break;
      case "RIGHT":
        if (this.dir === this.prev_dir) {
          if (this.dir_up) this.dir = "UP";
          else if (this.dir_right) this.dir = "RIGHT";
          else this.dir = "DOWN";
        }
        this.prev_dir = "RIGHT";
        break;
      case "UP":
        if (this.dir === this.prev_dir) {
          if (this.dir_left) this.dir = "LEFT";
          else if (this.dir_up) this.dir = "UP";
          else this.dir = "RIGHT";
        }
        this.prev_dir = "UP";
        break;
      case "LEFT":
        if (this.dir === this.prev_dir) {
          if (this.dir_down) this.dir = "DOWN";
          else if (this.dir_left) this.dir = "LEFT";
          else this.dir = "UP";
        }
        this.prev_dir = "LEFT";
        break;
    }
  }

  check_down() {
    return World.GAME_OBJECTS.find(
      (item) => item.y === this.y + 1 && item.x === this.x
    );
  }

  check_right() {
    return World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x + 1
    );
  }

  check_left() {
    return World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x - 1
    );
  }

  check_up() {
    return World.GAME_OBJECTS.find(
      (item) => item.y === this.y - 1 && item.x === this.x
    );
  }

  updateState() {
    this.looking_around();
    this.check_dir();
    if (this.dir === this.prev_dir) {
      switch (this.dir) {
        case "DOWN":
          if (this.dir_down && this.down_player) this.detonate();
          else if (this.dir_down) {
            this.animation = true;
            this.y += 1;
          }

          break;
        case "RIGHT":
          if (this.dir_right && this.right_player) this.detonate();
          else if (this.dir_right) {
            this.animation = true;
            this.x += 1;
          }

          break;
        case "UP":
          if (this.dir_up && this.up_player) this.detonate();
          else if (this.dir_up) {
            this.animation = true;
            this.y -= 1;
          }

          break;
        case "LEFT":
          if (this.dir_left && this.left_player) this.detonate();
          else if (this.dir_left) {
            this.animation = true;
            this.x -= 1;
          }

          break;
      }
    }
  }
}
