import { makeAutoObservable } from "mobx";

class GameStore {
  multiplayer = false;
  devMode = false;
  level = 0;

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
}

export default new GameStore();
