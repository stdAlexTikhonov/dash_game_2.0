import { makeAutoObservable, autorun } from "mobx";

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
class GameStore {
  multiplayer = false;
  devMode = false;
  level = 0;
  level_map: string[][] | null = null;
  state = 0;
  player1 = {
    direction: null as string | null,
    x: 0,
    y: 0,
  };

  constructor() {
    makeAutoObservable(this);

    autorun(() => {
      if (this.level_map) this.level_map[this.player1.y][this.player1.x] = "A";
    });
  }

  setMultiplayer() {
    this.multiplayer = true;
  }

  resetMultiplayer() {
    this.multiplayer = false;
  }

  setDevMode() {
    this.devMode = true;
  }

  resetDevMode() {
    this.devMode = false;
  }

  setLevel(level: number) {
    this.level = level;
  }

  setLevelMap(level_map: string[][] | null) {
    this.level_map = level_map;
    if (level_map)
      level_map.forEach((row, i) => {
        row.forEach((item, j) => {
          if (item === "A") {
            this.setPlayer1Position(i, j);
          }
        });
      });
  }

  setPlayer1Direction(dir: string | null) {
    this.player1.direction = dir;
  }

  updateState() {
    const maxY = this.level_map!.length - 1;
    const maxX = this.level_map![0]!.length - 1;

    if (this.player1.direction === "UP" && this.player1.y > 0)
      if (
        !STOP_OBJECTS.includes(
          this.level_map![this.player1.y - 1][this.player1.x]
        )
      )
        this.setPlayer1Position(this.player1.y - 1, this.player1.x);

    if (this.player1.direction === "DOWN" && this.player1.y < maxY)
      if (
        !STOP_OBJECTS.includes(
          this.level_map![this.player1.y + 1][this.player1.x]
        )
      )
        this.setPlayer1Position(this.player1.y + 1, this.player1.x);

    if (this.player1.direction === "LEFT" && this.player1.x > 0)
      if (
        !STOP_OBJECTS.includes(
          this.level_map![this.player1.y][this.player1.x - 1]
        )
      )
        this.setPlayer1Position(this.player1.y, this.player1.x - 1);

    if (this.player1.direction === "RIGHT" && this.player1.x < maxX)
      if (
        !STOP_OBJECTS.includes(
          this.level_map![this.player1.y][this.player1.x + 1]
        )
      )
        this.setPlayer1Position(this.player1.y, this.player1.x + 1);

    this.state++;
  }

  setPlayer1Position(y: number, x: number) {
    if (this.level_map) this.level_map[this.player1.y][this.player1.x] = " ";
    this.player1.x = x;
    this.player1.y = y;
  }
}

export default new GameStore();
