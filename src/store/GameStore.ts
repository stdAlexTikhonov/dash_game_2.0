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
            this.players[0].setPlayer1Position(i, j);
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
