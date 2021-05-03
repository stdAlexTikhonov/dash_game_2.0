export class Player {
  x: number;
  y: number;
  dy: number;
  direction: string | null;

  constructor(y: number, x: number) {
    this.y = y;
    this.x = x;
    this.dy = 1;
    this.direction = null;
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

  updateState(world: string[][]) {
    const maxY = world!.length - 1;
    const maxX = world![0]!.length - 1;

    if (this.direction === "UP" && this.y > 0)
      if (!Player.STOP_OBJECTS.includes(world[this.y - 1][this.x]))
        this.setPosition(this.y - 1, this.x);

    if (this.direction === "DOWN" && this.y < maxY)
      if (!Player.STOP_OBJECTS.includes(world[this.y + 1][this.x]))
        this.setPosition(this.y + 1, this.x);

    if (this.direction === "LEFT" && this.x > 0)
      if (Player.STOP_OBJECTS.includes(world[this.y][this.x - 1]))
        this.setPosition(this.y, this.x - 1);

    if (this.direction === "RIGHT" && this.x < maxX)
      if (Player.STOP_OBJECTS.includes(world[this.y][this.x + 1]))
        this.setPosition(this.y, this.x + 1);
  }

  setPosition(y: number, x: number) {
    this.x = x;
    this.y = y;
  }

  setState(dy: number) {
    this.dy = dy;
  }
}
