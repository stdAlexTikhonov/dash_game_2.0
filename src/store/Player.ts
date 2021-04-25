import { makeAutoObservable, autorun } from "mobx";
import GameStore from "./GameStore";

const STOP_OBJECTS = [
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
class Player {
  direction = null as string | null;
  x = 0;
  y = 0;
  dy = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setPlayer1Direction(dir: string | null) {
    this.direction = dir;
  }

  updateState() {
    const maxY = GameStore.level_map!.length - 1;
    const maxX = GameStore.level_map![0]!.length - 1;

    if (this.direction === "UP" && this.y > 0)
      if (!STOP_OBJECTS.includes(GameStore.level_map![this.y - 1][this.x]))
        this.setPlayer1Position(this.y - 1, this.x);

    if (this.direction === "DOWN" && this.y < maxY)
      if (!STOP_OBJECTS.includes(GameStore.level_map![this.y + 1][this.x]))
        this.setPlayer1Position(this.y + 1, this.x);

    if (this.direction === "LEFT" && this.x > 0)
      if (!STOP_OBJECTS.includes(GameStore.level_map![this.y][this.x - 1]))
        this.setPlayer1Position(this.y, this.x - 1);

    if (this.direction === "RIGHT" && this.x < maxX)
      if (!STOP_OBJECTS.includes(GameStore.level_map![this.y][this.x + 1]))
        this.setPlayer1Position(this.y, this.x + 1);
  }

  setPlayer1Position(y: number, x: number) {
    if (GameStore.level_map) GameStore.level_map[this.y][this.x] = " ";
    this.x = x;
    this.y = y;
  }

  setPlayer1DY(dy: number) {
    this.dy = dy;
  }
}

export default Player;
