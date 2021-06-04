import GameObject from "./GameObject";
export class Player extends GameObject {
  dy: number;
  direction: string | null;
  prev_horizontal_state: string = "LEFT";
  animation: boolean = false;
  user_input: string | null;

  constructor(y: number, x: number) {
    super(y, x);
    this.dy = 1;
    this.direction = null;
    this.animation = false;
    this.user_input = null;
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
  ];

  setDirection(dir: string | null) {
    this.direction = dir;
  }

  setUserInput(dir: string | null) {
    this.user_input = dir;
  }

  updateState(world: string[][]) {
    const maxY = world!.length - 1;
    const maxX = world![0]!.length - 1;

    this.animation = false;

    if (this.direction === "UP" && this.y > 0)
      if (!Player.STOP_OBJECTS.includes(world[this.y - 1][this.x])) {
        this.setPosition(this.y - 1, this.x);
        this.animation = true;
      }

    if (this.direction === "DOWN" && this.y < maxY)
      if (!Player.STOP_OBJECTS.includes(world[this.y + 1][this.x])) {
        this.setPosition(this.y + 1, this.x);
        this.animation = true;
      }

    if (this.direction === "LEFT" && this.x > 0)
      if (!Player.STOP_OBJECTS.includes(world[this.y][this.x - 1])) {
        this.setPosition(this.y, this.x - 1);
        this.prev_horizontal_state = "LEFT";
        this.animation = true;
      }

    if (this.direction === "RIGHT" && this.x < maxX)
      if (!Player.STOP_OBJECTS.includes(world[this.y][this.x + 1])) {
        this.prev_horizontal_state = "RIGHT";
        this.setPosition(this.y, this.x + 1);
        this.animation = true;
      }
  }

  setPosition(y: number, x: number) {
    this.x = x;
    this.y = y;
  }

  setState(dy: number) {
    this.dy = dy;
  }
}
