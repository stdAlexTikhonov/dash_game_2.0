export class Player {
  x: number;
  y: number;
  dy: number;
  direction: string | null;
  prev_horizontal_state: string = "LEFT";
  reset_direction: boolean = false;
  animation: boolean = false;

  constructor(y: number, x: number) {
    this.y = y;
    this.x = x;
    this.dy = 1;
    this.direction = null;
    this.animation = false;
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

  resetDirection() {
    this.reset_direction = true;
  }

  setDirection(dir: string | null) {
    if (dir) this.reset_direction = false;
    this.direction = dir;
  }

  updateState(world: string[][]) {
    const maxY = world!.length - 1;
    const maxX = world![0]!.length - 1;
    this.animation = false;

    if (this.reset_direction) this.setDirection(null);

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
