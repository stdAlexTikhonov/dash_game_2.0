import Bomb from "./Bomb";
import EmptyBlock from "./EmptyBlock";
import RedDisc from "./RedDisk";
import World from "./World";
import merphy from "../assets/images/merphy.png";
import { getPosition, getPlayerPosition } from "../utils/helpers";
import { store } from "../store/store";
import { getUserInput, getUserAction, putBomb } from "../store/playerSlice";
import MovableObject from "./MovableObject";

const BLOCK_WIDTH = 32;
export class Player extends Bomb {
  dy: number;
  move: boolean = false;
  direction: string | null;
  prev_horizontal_state: string = "LEFT";
  animation: boolean = false;
  img: HTMLImageElement = new Image();
  input_timeout: any = 0;
  dir_up: boolean = false;
  dir_down: boolean = false;
  dir_right: boolean = false;
  dir_left: boolean = false;
  movable_up: boolean = false;
  movable_down: boolean = false;
  movable_right: boolean = false;
  movable_left: boolean = false;
  move_state: boolean = false;
  bombs: number = 0;
  action: boolean = false;
  add_empty: boolean;

  constructor(y: number, x: number, char: string) {
    super(y, x, char);
    this.dy = 1;
    this.direction = null;
    this.add_empty = false;
    this.animation = false;
    this.img.src = merphy;
  }

  static STOP_OBJECTS = [
    "O",
    "+",
    "U",
    "R",
    "#",
    "C",
    "E",
    "Z",
    "X",
    "P",
    "L",
    "M",
    "N",
    "W",
    "Y",
    "D",
    ">",
    "<",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "^",
    "&",
    "7",
    "8",
    "9",
    "F",
  ];

  setDirection(dir: string) {
    this.direction = dir;
  }

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

  move_possible(char: string) {
    return !Player.STOP_OBJECTS.includes(char);
  }

  look_around() {
    const up_object = this.find_up();
    const down_object = this.find_down();
    const left_object = this.find_left();
    const right_object = this.find_right();

    this.dir_up = up_object ? this.move_possible(up_object.char) : true;
    this.dir_down = down_object ? this.move_possible(down_object.char) : true;
    this.dir_left = left_object ? this.move_possible(left_object.char) : true;
    this.dir_right = right_object
      ? this.move_possible(right_object.char)
      : true;

    this.movable_down = down_object && down_object.movable_down;
    this.movable_left = left_object && left_object.movable_left;
    this.movable_right = right_object && right_object.movable_right;
    this.movable_up = up_object && up_object.movable_up;

    this.add_empty = up_object && !up_object.falling;

    return {
      up_object,
      down_object,
      left_object,
      right_object,
    };
  }

  move_action(
    up_object: MovableObject,
    down_object: MovableObject,
    left_object: MovableObject,
    right_object: MovableObject
  ) {
    if (this.movable_down && this.move) down_object.y += 1;
    if (this.movable_left && this.move) left_object.x -= 1;
    if (this.movable_right && this.move) right_object.x += 1;
    if (this.movable_up && this.move) up_object.y -= 1;
  }

  put_bomb() {
    if (this.bombs > 0) {
      World.GAME_OBJECTS.push(new RedDisc(this.y, this.x, true));
      this.bombs--;
      store.dispatch(putBomb());
    }
  }

  updateState() {
    // const gamepods = window.navigator.getGamepads();
    // if (gamepods[0]) {
    //   const horizontalDir = gamepods[0]?.axes[0];
    //   const verticalDir = gamepods[0]?.axes[1];
    //   const verticalAbs = Math.abs(verticalDir);
    //   const horizontalAbs = Math.abs(horizontalDir);
    //   if (verticalAbs > 0.3 || horizontalAbs > 0.3) {
    //     if (verticalAbs > horizontalAbs) {
    //       this.direction = verticalDir > 0 ? "DOWN" : "UP";
    //       this.dy = this.prev_horizontal_state === "LEFT" ? 0 : 2;
    //     } else {
    //       this.direction = horizontalDir > 0 ? "RIGHT" : "LEFT";
    //       this.dy = horizontalDir > 0 ? 2 : 0;
    //     }
    //   } else {
    //     this.direction = null;
    //     this.dy = 1;
    //   }
    // }
    super.updateState();
    this.add_empty = false;
    const { up_object, down_object, left_object, right_object } =
      this.look_around();
    const state = store.getState();
    const user_input = getUserInput(state);

    this.direction = user_input;
    this.action = getUserAction(state);

    const maxY = World.height - 1;
    const maxX = World.width - 1;

    this.animation = false;
    if (up_object) up_object.move_up = false;
    if (down_object) down_object.move_down = false;
    if (right_object) right_object.move_right = false;
    if (left_object) left_object.move_left = false;

    if (this.action) {
      this.put_bomb();
      this.dy = 4;
    } else {
      if (this.direction === null) {
        this.dy = 1;
        this.move_state = false;
      }

      if (this.direction === "UP" && this.y > 0) {
        if (this.move) {
          this.move = false;
        } else if (this.dir_up || this.movable_up) {
          if (this.add_empty)
            World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
          this.y -= 1;
          this.animation = true;
          this.move = this.movable_up;
          if (up_object) up_object.move_up = true;
          this.dy = this.prev_horizontal_state === "LEFT" ? 0 : 2;
          this.move_state = this.movable_up;
          this.dy = this.move_state ? 5 : this.dy;
        }
      }

      if (this.direction === "DOWN" && this.y < maxY) {
        if (this.move) {
          this.move = false;
        } else if (this.dir_down || this.movable_down) {
          if (this.add_empty)
            World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
          this.y += 1;
          this.animation = true;
          this.move = this.movable_down;
          if (down_object) down_object.move_down = true;
          this.dy = this.prev_horizontal_state === "LEFT" ? 0 : 2;
          this.move_state = this.movable_down;
          this.dy = this.move_state ? 3 : this.dy;
        }
      }

      if (this.direction === "LEFT" && this.x > 0) {
        if (this.move) {
          this.move = false;
        } else if (this.dir_left || this.movable_left) {
          if (this.add_empty)
            World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
          this.x -= 1;
          this.prev_horizontal_state = "LEFT";
          this.animation = true;
          this.move = this.movable_left;
          if (left_object) left_object.move_left = true;
          this.move_state = this.movable_left;
          this.dy = this.move_state ? 5 : 0;
        }
      }

      if (this.direction === "RIGHT" && this.x < maxX) {
        if (this.move) {
          this.move = false;
        } else if (this.dir_right || this.movable_right) {
          if (this.add_empty)
            World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
          this.prev_horizontal_state = "RIGHT";
          this.x += 1;
          this.animation = true;
          this.move = this.movable_right;
          if (right_object) right_object.move_right = true;
          this.move_state = this.movable_right;
          this.dy = this.move_state ? 3 : 2;
        }
      }

      if (this.direction !== null)
        this.move_action(up_object, down_object, left_object, right_object);

      World.last_player_x = this.x;
      World.last_player_y = this.y;
    }
  }

  getState(state: number) {
    if (this.action) {
      switch (this.direction) {
        case "UP":
          return BLOCK_WIDTH;
        case "LEFT":
          return 4 * BLOCK_WIDTH;
        case "DOWN":
          return 2 * BLOCK_WIDTH;
        case "RIGHT":
          return 3 * BLOCK_WIDTH;
        default:
          return 0;
      }
    }

    return this.move_state ? 0 : state * BLOCK_WIDTH;
  }

  draw(
    context: CanvasRenderingContext2D,
    direction: string,
    animation: boolean,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    const state3 = World.counter % 3;
    context!.drawImage(
      this.img,
      this.getState(state3),
      this.dy * BLOCK_WIDTH,
      BLOCK_WIDTH,
      BLOCK_WIDTH,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }

  draw_as_second(
    context: CanvasRenderingContext2D,
    direction: string,
    animation: boolean,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    const { pos_y, pos_x } = getPosition(
      direction,
      animation,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      value
    );

    const { pos_y: pos_y_plus, pos_x: pos_x_plus } = getPlayerPosition(
      this.direction,
      this.animation,
      pos_x,
      pos_y,
      value
    );
    const state3 = World.counter % 3;
    context!.drawImage(
      this.img,
      state3 * BLOCK_WIDTH,
      this.dy * BLOCK_WIDTH,
      BLOCK_WIDTH,
      BLOCK_WIDTH,
      pos_x_plus,
      pos_y_plus,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }
}
