import GameObject from "./GameObject";
import World from "./World";
import merphy from "../assets/images/merphy.png";
import { getPosition, getPlayerPosition } from "../utils/helpers";

const BLOCK_WIDTH = 32;
export class Player extends GameObject {
  dy: number;

  direction: string | null;
  prev_horizontal_state: string = "LEFT";
  animation: boolean = false;
  user_input: string | null;
  img: HTMLImageElement = new Image();

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

  setUserInput(dir: string | null) {
    this.user_input = dir;
  }

  updateState() {
    this.direction = this.user_input;
    const { world_map: world } = World;
    const maxY = world!.length - 1;
    const maxX = world![0]!.length - 1;

    this.animation = false;

    if (this.direction === "UP" && this.y > 0)
      if (!Player.STOP_OBJECTS.includes(world[this.y - 1][this.x])) {
        this.y -= 1;
        this.animation = true;
      }

    if (this.direction === "DOWN" && this.y < maxY)
      if (!Player.STOP_OBJECTS.includes(world[this.y + 1][this.x])) {
        this.y += 1;
        this.animation = true;
      }

    if (this.direction === "LEFT" && this.x > 0)
      if (!Player.STOP_OBJECTS.includes(world[this.y][this.x - 1])) {
        this.x -= 1;
        this.prev_horizontal_state = "LEFT";
        this.animation = true;
      }

    if (this.direction === "RIGHT" && this.x < maxX)
      if (!Player.STOP_OBJECTS.includes(world[this.y][this.x + 1])) {
        this.prev_horizontal_state = "RIGHT";
        this.x += 1;
        this.animation = true;
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
