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

  looking_around() {
    const { world_map } = World;

    if (world_map[this.y - 1]) {
      this.dir_left =
        world_map[this.y][this.x - 1] === " " &&
        !"*O".includes(world_map[this.y - 1][this.x - 1]);

      this.dir_right =
        world_map[this.y][this.x + 1] === " " &&
        !"*O".includes(world_map[this.y - 1][this.x + 1]);

      this.dir_up =
        world_map[this.y - 1] && world_map[this.y - 1][this.x] === " ";
    } else {
      this.dir_left = world_map[this.y][this.x - 1] === " ";
      this.dir_right = world_map[this.y][this.x + 1] === " ";
      this.dir_up = false;
    }

    this.dir_down =
      world_map[this.y + 1] && world_map[this.y + 1][this.x] === " ";
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

  updateState() {
    const { world_map } = World;

    this.looking_around();

    this.check_dir();

    if (this.dir === this.prev_dir) {
      switch (this.dir) {
        case "DOWN":
          if (world_map[this.y + 1] && world_map[this.y + 1][this.x] === " ") {
            this.animation = true;
            this.y += 1;
          }
          break;
        case "RIGHT":
          if (world_map[this.y][this.x + 1] === " ") {
            this.animation = true;
            this.x += 1;
          }
          break;
        case "UP":
          if (world_map[this.y - 1] && world_map[this.y - 1][this.x] === " ") {
            this.animation = true;
            this.y -= 1;
          }
          break;
        case "LEFT":
          if (world_map[this.y][this.x - 1] === " ") {
            this.animation = true;
            this.x -= 1;
          }
          break;
      }
    }
  }
}
