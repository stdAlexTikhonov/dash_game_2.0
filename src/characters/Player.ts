import Bomb from "./Bomb";
import EmptyBlock from "./EmptyBlock";
import World from "./World";
import merphy from "../assets/images/merphy.png";
import { getPosition, getPlayerPosition } from "../utils/helpers";
import { store } from "../store/store";
import { getUserInput } from "../store/playerSlice";

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

  constructor(y: number, x: number, char: string) {
    super(y, x, char);
    this.dy = 1;
    this.direction = null;
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

    return obj ? obj.char : " ";
  }

  find_right() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y && item.x === this.x + 1
    );

    return obj ? obj.char : " ";
  }

  find_up() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y - 1 && item.x === this.x
    );

    return obj ? obj.char : " ";
  }

  find_down() {
    const obj = World.GAME_OBJECTS.find(
      (item) => item.y === this.y + 1 && item.x === this.x
    );

    return obj ? obj.char : " ";
  }

  look_around() {
    this.dir_up = !Player.STOP_OBJECTS.includes(this.find_up());
    this.dir_down = !Player.STOP_OBJECTS.includes(this.find_down());
    this.dir_left = !Player.STOP_OBJECTS.includes(this.find_left());
    this.dir_right = !Player.STOP_OBJECTS.includes(this.find_right());
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
    this.look_around();
    const state = store.getState();
    const user_input = getUserInput(state);

    this.direction = user_input;

    const maxY = World.height - 1;
    const maxX = World.width - 1;

    this.animation = false;

    if (this.direction === "UP" && this.y > 0) {
      if (this.dir_up) {
        World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
        this.y -= 1;
        this.animation = true;
      }
    }

    if (this.direction === "DOWN" && this.y < maxY) {
      if (this.dir_down) {
        World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
        this.y += 1;
        this.animation = true;
      }
    }

    if (this.direction === "LEFT" && this.x > 0) {
      if (this.dir_left) {
        World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
        this.x -= 1;
        this.prev_horizontal_state = "LEFT";
        this.animation = true;
      }
    }

    if (this.direction === "RIGHT" && this.x < maxX) {
      if (this.dir_right) {
        World.GAME_OBJECTS.push(new EmptyBlock(this.y, this.x));
        this.prev_horizontal_state = "RIGHT";
        this.x += 1;
        this.animation = true;
      }
    }
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
      state3 * BLOCK_WIDTH,
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

  setState(dy: number) {
    this.dy = dy;
  }
}
