import { makeAutoObservable } from "mobx";

class GameStore {
  multiplayer = false;
  devMode = false;
  level = 0;
  level_map: string[][] | null = null;

  constructor() {
    makeAutoObservable(this);
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
  }
}

export default new GameStore();
