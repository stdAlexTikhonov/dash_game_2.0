import { makeAutoObservable } from "mobx";
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
  x = -1;
  y = -1;
  dy = 1;

  constructor(y: number, x: number) {
    this.y = y;
    this.x = x;
    makeAutoObservable(this);
  }

  setDirection(dir: string | null) {
    this.direction = dir;
  }

  updateState() {
    const maxY = GameStore.level_map!.length - 1;
    const maxX = GameStore.level_map![0]!.length - 1;

    if (this.direction === "UP" && this.y > 0)
      if (!STOP_OBJECTS.includes(GameStore.level_map![this.y - 1][this.x]))
        this.setPosition(this.y - 1, this.x);

    if (this.direction === "DOWN" && this.y < maxY)
      if (!STOP_OBJECTS.includes(GameStore.level_map![this.y + 1][this.x]))
        this.setPosition(this.y + 1, this.x);

    if (this.direction === "LEFT" && this.x > 0)
      if (!STOP_OBJECTS.includes(GameStore.level_map![this.y][this.x - 1]))
        this.setPosition(this.y, this.x - 1);

    if (this.direction === "RIGHT" && this.x < maxX)
      if (!STOP_OBJECTS.includes(GameStore.level_map![this.y][this.x + 1]))
        this.setPosition(this.y, this.x + 1);
  }

  setPosition(y: number, x: number) {
    if (GameStore.level_map) {
      GameStore.level_map[this.y][this.x] = " ";
    }
    this.x = x;
    this.y = y;
  }

  setState(dy: number) {
    this.dy = dy;
  }
}

export default Player;
