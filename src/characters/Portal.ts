import GameObject from "./GameObject";
import { Player } from "./Player";
import World from "./World";

export default class Portal extends GameObject {
  img: HTMLImageElement = new Image();
  type: string = "";
  up: boolean = false;
  down: boolean = false;
  left: boolean = false;
  right: boolean = false;

  player_top: boolean = false;
  player_bottom: boolean = false;
  player_left: boolean = false;
  player_right: boolean = false;

  player_dir: string = "";

  find_left() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x - 1
    );

    return obj;
  }

  find_right() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x + 1
    );

    return obj;
  }

  find_up() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y - 1 && item.x === this.x
    );
    return obj;
  }

  find_down() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y + 1 && item.x === this.x
    );
    return obj;
  }

  look_around() {
    const up = this.find_up();
    const down = this.find_down();
    const left = this.find_left();
    const right = this.find_right();

    this.up = up;
    this.down = down;
    this.right = right;
    this.left = left;

    this.player_bottom = down && down.char === "A";
    this.player_top = up && up.char === "A";
    this.player_left = left && left.char === "A";
    this.player_right = right && right.char === "A";

    // if (this.player_top && this.down) Player.STOP_OBJECTS.push("F");
    // else
    //   Player.STOP_OBJECTS = Player.STOP_OBJECTS.filter((item) => item !== "F");
    switch (this.type) {
      case "CROSS":
        if (this.player_top && !this.down && up.direction === "DOWN") up.y += 2;
        if (this.player_bottom && !this.up && down.direction === "UP")
          down.y -= 2;
        if (this.player_left && !this.right && left.direction === "RIGHT")
          left.x += 2;
        if (this.player_right && !this.left && right.direction === "LEFT")
          right.x -= 2;
        break;
      case "RIGHT":
        if (this.player_left && !this.right && left.direction === "RIGHT")
          left.x += 2;
        break;
      case "LEFT":
        if (this.player_right && !this.left && right.direction === "LEFT")
          right.x -= 2;
        break;
      case "UP":
        if (this.player_bottom && !this.up && down.direction === "UP")
          down.y -= 2;
        break;
      case "DOWN":
        if (this.player_top && !this.down && up.direction === "DOWN") up.y += 2;
        break;
      case "LEFT_RIGHT":
        if (this.player_left && !this.right && left.direction === "RIGHT")
          left.x += 2;
        if (this.player_right && !this.left && right.direction === "LEFT")
          right.x -= 2;
        break;
      case "UP_DOWN":
        if (this.player_top && !this.down && up.direction === "DOWN") up.y += 2;
        if (this.player_bottom && !this.up && down.direction === "UP")
          down.y -= 2;
        break;

      default:
        return;
    }
  }

  force_move() {
    this.look_around();
  }

  updateState() {
    this.force_move();
  }
}
