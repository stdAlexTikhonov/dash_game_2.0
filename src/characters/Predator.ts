import Bomb from "./Bomb";
import World from "./World";

export default class Predator extends Bomb {
  dir_down: boolean = true;
  dir_left: boolean = false;
  dir_up: boolean = false;
  dir_right: boolean = false;
  dir: string | null = "DOWN";
  prev_dir: string | null = null;
  animation: boolean = false;

  looking_around() {
    this.dir_left = this.check_left();
    this.dir_right = this.check_right();
    this.dir_up = this.check_up();
    this.dir_down = this.check_down();
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

    return this.y < World.height - 1 ? !down_object : false;
  }

  check_right() {
    const right_object = World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x + 1
    );
    return this.x < World.width - 1 ? !right_object : false;
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

  check_down_player() {
    const down_object = World.GAME_OBJECTS.find(
      (item) => item.y === this.y + 1 && item.x === this.x
    );
    if (down_object && down_object.char === "A") down_object.detonate();
  }

  check_right_player() {
    const right_object = World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x + 1
    );
    if (right_object && right_object.char === "A") right_object.detonate();
  }

  check_left_player() {
    const left_object = World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x - 1
    );
    if (left_object && left_object.char === "A") left_object.detonate();
  }

  check_up_player() {
    const up_object = World.GAME_OBJECTS.find(
      (item) => item.y === this.y - 1 && item.x === this.x
    );
    if (up_object && up_object.char === "A") up_object.detonate();
  }

  updateState() {
    this.looking_around();
    this.check_dir();
    if (this.dir === this.prev_dir) {
      switch (this.dir) {
        case "DOWN":
          if (this.dir_down) {
            this.animation = true;
            this.y += 1;
          }
          this.check_down_player();
          break;
        case "RIGHT":
          if (this.dir_right) {
            this.animation = true;
            this.x += 1;
          }
          this.check_right_player();
          break;
        case "UP":
          if (this.dir_up) {
            this.animation = true;
            this.y -= 1;
          }
          this.check_up_player();
          break;
        case "LEFT":
          if (this.dir_left) {
            this.animation = true;
            this.x -= 1;
          }
          this.check_left_player();
          break;
      }
    }
  }
}
