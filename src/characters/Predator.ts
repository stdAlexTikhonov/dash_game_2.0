import GameObject from "./GameObject";
import World from "./World";

export default class Predator extends GameObject {
  dir_down: boolean = true;
  dir_left: boolean = false;
  dir_up: boolean = false;
  dir_right: boolean = false;
  dir: string | null = "DOWN";
  prev_dir: string | null = null;
  animation: boolean = false;
  detonated: boolean = false;

  looking_around() {
    this.dir_left = this.check_left();
    this.dir_right = this.check_right();
    this.dir_up = this.check_up();
    this.dir_down = this.check_down();
  }

  detonate() {
    this.detonated = true;
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
    const down_object = World.GAME_OBJECTS.find(
      (item) => item.y === this.y + 1 && item.x === this.x
    );
    return this.y < World.world_map.length - 1 ? !down_object : false;
  }

  check_right() {
    const right_object = World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x + 1
    );
    return this.x < World.world_map[0].length - 1 ? !right_object : false;
  }

  check_left() {
    const left_object = World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x - 1
    );
    return this.x > 0 ? !left_object : false;
  }

  check_up() {
    const up_object = World.GAME_OBJECTS.find(
      (item) => item.y === this.y - 1 && item.x === this.x
    );
    return this.y > 0 ? !up_object : false;
  }

  updateState() {
    this.looking_around();

    this.check_dir();

    if (this.dir === this.prev_dir) {
      switch (this.dir) {
        case "DOWN":
          if (this.check_down()) {
            this.animation = true;
            this.y += 1;
          }
          break;
        case "RIGHT":
          if (this.check_right()) {
            this.animation = true;
            this.x += 1;
          }
          break;
        case "UP":
          if (this.check_up()) {
            this.animation = true;
            this.y -= 1;
          }
          break;
        case "LEFT":
          if (this.check_left()) {
            this.animation = true;
            this.x -= 1;
          }
          break;
      }
    }
  }
}
