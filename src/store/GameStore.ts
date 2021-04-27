import { makeAutoObservable, autorun } from "mobx";
import Player from "./Player";
import FallenObject from "./FallenObject";

class GameStore {
  multiplayer = false;
  devMode = false;
  level = 0;
  level_map: string[][] | null = null;
  state = 0;
  players = [new Player()];
  rocks: FallenObject[] = [];
  stars: FallenObject[] = [];
  orange_disks: FallenObject[] = [];

  constructor() {
    makeAutoObservable(this);

    autorun(() => {
      if (this.level_map) {
        const player1 = this.players[0];
        this.level_map![player1.y][player1.x] = "A";
        if (this.multiplayer) {
          const player2 = this.players[1];
          this.level_map![player2.y][player2.x] = "H";
        }
      }
      this.rocks.forEach((rock) => {
        this.level_map![rock.y][rock.x] = "O";
      });

      this.stars.forEach((star) => {
        this.level_map![star.y][star.x] = "*";
      });

      this.orange_disks.forEach((disk) => {
        this.level_map![disk.y][disk.x] = "D";
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

          if (item === "O") {
            this.rocks.push(new FallenObject(i, j));
          }

          if (item === "*") {
            this.stars.push(new FallenObject(i, j));
          }

          if (item === "D") {
            this.orange_disks.push(new FallenObject(i, j));
          }
        });
      });
  }

  updateState() {
    this.players.forEach((player) => player.updateState());
    this.rocks.forEach((rock) => rock.updateState());
    this.stars.forEach((star) => star.updateState());
    this.orange_disks.forEach((disk) => disk.updateState());
    this.state++;
  }
}

export default new GameStore();
