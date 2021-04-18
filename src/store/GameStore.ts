import { observable, computed, configure, action } from "mobx";

configure({ enforceActions: "observed" });

export class GameStore {
  @observable multiplayer = false;

  @action setMultiplayer() {
    this.multiplayer = true;
  }

  @action resetMultiplayer() {
    this.multiplayer = false;
  }
}

export default new GameStore();
