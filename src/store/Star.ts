import { makeAutoObservable } from "mobx";
import GameStore from "./GameStore";

class Star {
  direction = null as string | null;
  x = 0;
  y = 0;
  alive = true;
  fallen = false;

  constructor(y: number, x: number) {
    this.y = y;
    this.x = x;
    makeAutoObservable(this);
  }

  updateState() {
    const [player] = GameStore.players;
    if (this.x === player.x && this.y === player.y) {
      this.alive = false;
      return;
    }
    if (this.fallen) this.setPosition(this.y + 1, this.x);
    this.checkFallen();
  }

  setPosition(y: number, x: number) {
    if (GameStore.level_map) GameStore.level_map[this.y][this.x] = " ";
    this.x = x;
    this.y = y;
  }

  checkFallen() {
    this.fallen =
      GameStore.level_map && this.y !== GameStore.level_map.length - 1
        ? GameStore.level_map![this.y + 1][this.x] === " "
        : false;
  }
}

export default Star;
