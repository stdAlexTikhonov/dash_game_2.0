import { Player } from "./Player";
import Motherboard from "./Motherboard";
import Rock from "./Rock";
import Infotron from "./Infotron";
import Wall from "./Wall";
import Ram from "./Ram";
import Exit from "./Exit";
import Scissors from "./Scissors";
import Electron from "./Electron";
import Ram2 from "./Ram2";
import Ram3 from "./Ram3";
import Ram4 from "./Ram4";
import Ram5 from "./Ram5";
import Bug from "./Bug";
import Computer from "./Computer";
import RedDisk from "./RedDisk";
import YellowDisk from "./YellowDisk";
import OrangeDisk from "./OrangeDisk";
import PortalLeft from "./PortalLeft";
import PortalRight from "./PortalRight";
import PortalUp from "./PortalUp";
import PortalDown from "./PortalDown";
import PortalCross from "./PortalCross";
import PortalUpDown from "./PortalUpDown";
import PortalLeftRight from "./PortalLeftRight";
import Explosion from "./Explosion";
import Part from "./Part";
import { store } from "../store/store";
import { setPlayerReady } from "../store/playerSlice";

class World {
  viewport_w: number = window.innerWidth;
  viewport_h: number = window.innerHeight;
  width: number = 0;
  height: number = 0;
  counter: number;
  last_player_x: number = 0;
  last_player_y: number = 0;

  player: Player | null = null;
  player2: Player | null = null;
  GAME_OBJECTS: Array<any> = [];
  multiplayer: boolean = false;
  animation: boolean | undefined = false;

  constructor() {
    this.counter = 0;
    this.animation = false;
  }

  static BLOCK_WIDTH = 32;

  setViewportWidth(width: number) {
    this.viewport_w = width;
  }

  draw2(context: CanvasRenderingContext2D, value: number) {
    context.fillStyle = "black";
    context.fillRect(0, 0, this.viewport_w, this.viewport_h);
    const viewport_start_x = this.player2!.x - Math.floor(this.width / 2);
    const viewport_start_y = this.player2!.y - Math.floor(this.height / 2);

    this.GAME_OBJECTS.forEach((elem) =>
      elem.draw(
        context,
        this.player2!.direction || "",
        this.player2!.animation,
        viewport_start_y,
        viewport_start_x,
        value
      )
    );

    this.player?.draw_as_second(
      context,
      this.player2!.direction || "",
      this.player2!.animation,
      viewport_start_y,
      viewport_start_x,
      value
    );
    this.player2?.draw(
      context,
      "LEFT",
      false,
      viewport_start_y,
      viewport_start_x,
      0
    );
  }

  draw(context: CanvasRenderingContext2D, value: number) {
    context.fillStyle = "black";
    context.fillRect(0, 0, this.viewport_w, this.viewport_h);

    const player = this.GAME_OBJECTS.find((item) => item.char === "A");

    const viewport_start_x =
      (player ? player.x : this.last_player_x) - Math.floor(this.width / 2);
    const viewport_start_y =
      (player ? player.y : this.last_player_y) - Math.floor(this.height / 2);

    this.GAME_OBJECTS.forEach((elem) =>
      elem.draw(
        context,
        player ? player.direction : "",
        player ? player.animation : false,
        viewport_start_y,
        viewport_start_x,
        value
      )
    );

    // this.player2 &&
    //   this.player2?.draw_as_second(
    //     context,
    //     this.player!.direction || "",
    //     this.player!.animation,
    //     viewport_start_y,
    //     viewport_start_x,
    //     value
    //   );

    // this.player?.draw(
    //   context,
    //   "LEFT",
    //   false,
    //   viewport_start_y,
    //   viewport_start_x,
    //   0
    // );
  }

  setMultiplayer() {
    this.multiplayer = true;
    this.player2 = new Player(this.player!.y, this.player!.x, "H");
  }

  resetMultiplayer() {
    this.multiplayer = false;
    // if (this.player2) this.world_map[this.player2!.y][this.player2!.x] = " ";
    this.player2 = null;
  }

  updateMap() {
    const player = this.GAME_OBJECTS.find((item) => item.char === "A");

    if (player && player.finished) {
      this.last_player_x = player.x;
      this.last_player_y = player.y;
    }
    if (player)
      this.GAME_OBJECTS.forEach((item) => {
        if (item.x === player.x && item.y === player.y) {
          if ([".", "*"].includes(item.char)) item.collect();
          else if (item.char === "%" && !item.activated) {
            item.collect();
            player.bombs++;
          }
        }
      });

    this.GAME_OBJECTS = this.GAME_OBJECTS.filter((item) => {
      return !item.finished;
    });
  }

  tick() {
    if (this.player2) this.player2.updateState();
    this.GAME_OBJECTS.sort((a, b) => b.y - a.y);
    this.GAME_OBJECTS.forEach((item) => item.updateState());

    this.updateMap();
    this.counter++;
  }

  setMap(world_map: string[][]) {
    this.resetWorld();
    this.width = world_map[0].length;
    this.height = world_map.length;

    world_map.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === "A") {
          this.player = new Player(y, x, "A");
          this.GAME_OBJECTS.push(new Player(y, x, "A"));
          store.dispatch(setPlayerReady());
        }
        if (cell === ".") this.GAME_OBJECTS.push(new Motherboard(y, x));
        if (cell === "#") this.GAME_OBJECTS.push(new Wall(y, x));
        if (cell === "O") this.GAME_OBJECTS.push(new Rock(y, x));
        if (cell === "+") this.GAME_OBJECTS.push(new Ram(y, x));
        if (cell === "*") this.GAME_OBJECTS.push(new Infotron(y, x));
        if (cell === "E") this.GAME_OBJECTS.push(new Exit(y, x));
        if (cell === "X") this.GAME_OBJECTS.push(new Scissors(y, x));
        if (cell === "Z") this.GAME_OBJECTS.push(new Electron(y, x));
        if (cell === "R") this.GAME_OBJECTS.push(new Ram2(y, x));
        if (cell === "U") this.GAME_OBJECTS.push(new Ram3(y, x));
        if (cell === "C") this.GAME_OBJECTS.push(new Computer(y, x));
        if (cell === "B") this.GAME_OBJECTS.push(new Bug(y, x));
        if (cell === "D") this.GAME_OBJECTS.push(new OrangeDisk(y, x));
        if (cell === "Y") this.GAME_OBJECTS.push(new YellowDisk(y, x));
        if (cell === "%") this.GAME_OBJECTS.push(new RedDisk(y, x));
        if (cell === "<") this.GAME_OBJECTS.push(new PortalLeft(y, x));
        if (cell === ">") this.GAME_OBJECTS.push(new PortalRight(y, x));
        if (cell === "P") this.GAME_OBJECTS.push(new Part(y, x, "P"));
        if (cell === "W") this.GAME_OBJECTS.push(new Part(y, x, "W"));
        if (cell === "N") this.GAME_OBJECTS.push(new Part(y, x, "N"));
        if (cell === "L") this.GAME_OBJECTS.push(new Part(y, x, "L"));
        if (cell === "M") this.GAME_OBJECTS.push(new Part(y, x, "M"));
        if (cell === "6") this.GAME_OBJECTS.push(new Part(y, x, "6"));
        if (cell === "2") this.GAME_OBJECTS.push(new PortalLeftRight(y, x));
        if (cell === "3") this.GAME_OBJECTS.push(new Ram4(y, x));
        if (cell === "4") this.GAME_OBJECTS.push(new Ram5(y, x));
        if (cell === "5") this.GAME_OBJECTS.push(new PortalUpDown(y, x));
        if (cell === "^") this.GAME_OBJECTS.push(new PortalUp(y, x));
        if (cell === "&") this.GAME_OBJECTS.push(new PortalDown(y, x));
        if (cell === "1") this.GAME_OBJECTS.push(new Part(y, x, "1"));
        if (cell === "7") this.GAME_OBJECTS.push(new Part(y, x, "7"));
        if (cell === "8") this.GAME_OBJECTS.push(new Part(y, x, "8"));
        if (cell === "9") this.GAME_OBJECTS.push(new Part(y, x, "9"));
        if (cell === "F") this.GAME_OBJECTS.push(new PortalCross(y, x));
        if (cell === "J") this.GAME_OBJECTS.push(new Explosion(y, x));
      });
    });

    this.GAME_OBJECTS.sort((a, b) => b.y - a.y);
  }

  resetWorld() {
    this.GAME_OBJECTS = [];
    this.player = null;
    this.player2 = null;
  }
}

export default new World();
