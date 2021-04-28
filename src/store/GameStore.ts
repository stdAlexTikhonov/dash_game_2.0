import { makeAutoObservable, autorun, computed } from "mobx";
import Player from "./Player";
import FallenObject from "./FallenObject";
import Star from "./Star";

class GameStore {
  multiplayer = false;
  devMode = false;
  level = 1;
  level_map: string[][] | null = null;
  state = 0;
  players: Player[] = [];
  rocks: FallenObject[] = [];
  stars: Star[] = [];
  orange_disks: FallenObject[] = [];
  stars_start_length: number = 0;

  constructor() {
    makeAutoObservable(this, { scores: computed });

    autorun(() => {
      if (this.level_map) {
        const player1 = this.players[0];
        this.level_map![player1.y][player1.x] = "A";
        if (this.multiplayer) {
          const player2 = this.players[1];
          this.level_map![player2.y][player2.x] = "H";
        }
      }

      this.stars.forEach((star) => {
        this.level_map![star.y][star.x] = "*";
      });

      this.orange_disks.forEach((disk) => {
        this.level_map![disk.y][disk.x] = "D";
      });

      this.rocks.forEach((rock) => {
        this.level_map![rock.y][rock.x] = "O";
      });
    });
  }

  setMultiplayer() {
    this.multiplayer = true;
    const [player] = this.players;
    this.players.push(new Player(player.y, player.x));
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
    this.level_map = [];
    this.rocks = [];
    this.stars = [];
    this.orange_disks = [];
    this.players = [];
    this.level_map = level_map;
    if (level_map)
      level_map.forEach((row, i) => {
        row.forEach((item, j) => {
          if (item === "A") {
            this.players.push(new Player(i, j));
            this.multiplayer && this.players.push(new Player(i, j));
          }

          if (item === "O") {
            this.rocks.push(new FallenObject(i, j));
          }

          if (item === "*") {
            this.stars.push(new Star(i, j));
          }

          if (item === "D") {
            this.orange_disks.push(new FallenObject(i, j));
          }
        });
      });
    this.stars_start_length = this.stars.length;
  }

  updateState() {
    this.players.forEach((player) => player.updateState());
    this.rocks.forEach((rock) => rock.updateState());
    this.stars.forEach((star) => star.updateState());
    this.orange_disks.forEach((disk) => disk.updateState());
    this.checkStars();
    this.state++;
  }

  checkStars() {
    this.stars = this.stars.filter((star) => star.alive);
  }

  get scores() {
    return this.stars_start_length - this.stars.length;
  }
}

export default new GameStore();
