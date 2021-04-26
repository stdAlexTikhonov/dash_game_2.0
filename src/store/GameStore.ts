import { makeAutoObservable, autorun } from "mobx";
import Player from "./Player";

class GameStore {
  multiplayer = false;
  devMode = false;
  level = 0;
  level_map: string[][] | null = null;
  state = 0;
  players = [new Player()];

  constructor() {
    makeAutoObservable(this);

    autorun(() => {
      if (this.level_map)
        this.players.forEach((player) => {
          this.level_map![player.y][player.x] = "A";
        });
    });
  }

  setMultiplayer() {
    this.multiplayer = true;
    this.players.push(new Player());
    this.players[1].setPosition(this.players[0].y, this.players[0].x);
  }

  resetMultiplayer() {
    this.multiplayer = false;
    const player = this.players.pop();
    this.level_map![player!.y][player!.x] = " ";
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
            this.players[0].setPosition(i, j);
            this.multiplayer && this.players[1].setPosition(i, j);
          }
        });
      });
  }

  updateState() {
    this.players.forEach((player) => player.updateState());
    this.state++;
  }
}

export default new GameStore();
