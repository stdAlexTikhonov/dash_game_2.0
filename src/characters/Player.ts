import GameObject from "./GameObject";
import World from "./World";
import merphy from "../assets/images/merphy.png";
import { getPosition, getPlayerPosition } from "../utils/helpers";

const BLOCK_WIDTH = 32;
export class Player extends GameObject {
  dy: number;
  move: boolean = false;
  direction: string | null;
  prev_horizontal_state: string = "LEFT";
  animation: boolean = false;
  user_input: string | null;
  img: HTMLImageElement = new Image();
  input_timeout: any = 0;

  constructor(y: number, x: number, char: string) {
    super(y, x, char);
    this.dy = 1;
    this.direction = null;
    this.animation = false;
    this.user_input = null;
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

  static MOVABLE_OBJECTS = ["O"];

  setUserInput(dir: string | null) {
    this.user_input = dir;
  }

  setDirection(dir: string) {
    this.direction = dir;
  }

  check_movable_left() {
    const { GAME_OBJECTS } = World;
    const elem = GAME_OBJECTS.find(
      (item) => item.x === this.x - 1 && item.y === this.y
    );
    return elem ? elem.movable_left : false;
  }

  check_movable_right() {
    const { GAME_OBJECTS } = World;
    const elem = GAME_OBJECTS.find(
      (item) => item.x === this.x + 1 && item.y === this.y
    );
    return elem ? elem.movable_right : false;
  }

  check_movable_up() {
    const { GAME_OBJECTS } = World;
    const elem = GAME_OBJECTS.find(
      (item) => item.x === this.x && item.y === this.y - 1
    );
    return elem ? elem.movable_up : false;
  }

  check_movable_down() {
    const { GAME_OBJECTS } = World;
    const elem = GAME_OBJECTS.find(
      (item) => item.x === this.x && item.y === this.y + 1
    );
    return elem ? elem.movable_down : false;
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

    this.direction = this.user_input;
    const { world_map: world } = World;
    const maxY = world!.length - 1;
    const maxX = world![0]!.length - 1;

    this.animation = false;

    if (this.move) {
      this.move = false;
      this.direction = null;
    }

    if (this.direction === "UP" && this.y > 0) {
      if (!Player.STOP_OBJECTS.includes(world[this.y - 1][this.x])) {
        this.y -= 1;
        this.animation = true;
      } else if (this.check_movable_up()) {
        this.y -= 1;
        this.prev_horizontal_state = "UP";
        this.animation = true;
        this.move = true;
      }
    }

    if (this.direction === "DOWN" && this.y < maxY) {
      if (!Player.STOP_OBJECTS.includes(world[this.y + 1][this.x])) {
        this.y += 1;
        this.animation = true;
      } else if (this.check_movable_down()) {
        this.y += 1;
        this.prev_horizontal_state = "DOWN";
        this.animation = true;
        this.move = true;
      }
    }

    if (this.direction === "LEFT" && this.x > 0) {
      if (!Player.STOP_OBJECTS.includes(world[this.y][this.x - 1])) {
        this.x -= 1;
        this.prev_horizontal_state = "LEFT";
        this.animation = true;
      } else if (this.check_movable_left()) {
        this.x -= 1;
        this.prev_horizontal_state = "LEFT";
        this.animation = true;
        this.move = true;
      }
    }

    if (this.direction === "RIGHT" && this.x < maxX) {
      if (!Player.STOP_OBJECTS.includes(world[this.y][this.x + 1])) {
        this.prev_horizontal_state = "RIGHT";
        this.x += 1;
        this.animation = true;
      } else if (this.check_movable_right()) {
        this.x += 1;
        this.prev_horizontal_state = "RIGHT";
        this.animation = true;
        this.move = true;
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
