import { makeAutoObservable } from "mobx";

class GameStore {
  multiplayer = false;
  devMode = false;

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
}

export default new GameStore();
