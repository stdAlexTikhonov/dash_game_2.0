import GameObject from "./GameObject";
import World from "./World";
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

  setState(dy: number) {
    this.dy = dy;
  }
}
