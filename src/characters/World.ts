import ground from "../assets/images/ground.png";
import merphy from "../assets/images/merphy.png";
import wall from "../assets/images/wall.png";
import ram from "../assets/images/ram.png";
import rock from "../assets/images/rock.png";
import food from "../assets/images/food.png";
import exit from "../assets/images/exit.png";
import scissors from "../assets/images/scissors.png";
import electron from "../assets/images/electron.png";
import ram2 from "../assets/images/RAM2.png";
import ram3 from "../assets/images/RAM3.png";
import ram4 from "../assets/images/RAM_4.png";
import ram5 from "../assets/images/RAM_5.png";
import bug from "../assets/images/bug.png";
import computer from "../assets/images/computer.png";
import orange_disk from "../assets/images/orange_disk.png";
import yellow_disk from "../assets/images/yellow_disk.png";
import red_disk from "../assets/images/red_disk.png";
import portal_right from "../assets/images/portal_right.png";
import portal_left from "../assets/images/portal_left.png";
import portal_left_right from "../assets/images/portal_left_right.png";
import portal_up_down from "../assets/images/portal_up_down.png";
import portal_up from "../assets/images/portal_up.png";
import portal_down from "../assets/images/portal_down.png";
import portal_cross from "../assets/images/portal_cross.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import a5 from "../assets/images/a5.png";
import a6 from "../assets/images/a6.png";
import P from "../assets/images/P.png";
import W from "../assets/images/W.png";
import N from "../assets/images/N.png";
import L from "../assets/images/L.png";
import M from "../assets/images/M.png";
import Hardware7 from "../assets/images/Hardware7.png";

import { Player } from "./Player";
import GameObject from "./GameObject";
import FallingObject from "./FallingObject";
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
import Part from "./Part";

class World {
  viewport_w: number = window.innerWidth;
  viewport_h: number = window.innerHeight;
  width: number = 0;
  height: number = 0;
  counter: number;
  world_map: string[][] = [];
  ground_img: HTMLImageElement;
  merphy_img: HTMLImageElement;
  wall_img: HTMLImageElement;
  ram_img: HTMLImageElement;
  player: Player | null = null;
  player2: Player | null = null;
  rock_img: HTMLImageElement;
  food_img: HTMLImageElement;
  exit_img: HTMLImageElement;
  scissors_img: HTMLImageElement;
  electron_img: HTMLImageElement;
  ram2_img: HTMLImageElement;
  ram3_img: HTMLImageElement;
  ram4_img: HTMLImageElement;
  ram5_img: HTMLImageElement;
  bug_img: HTMLImageElement;
  computer_img: HTMLImageElement;
  orange_disk_img: HTMLImageElement;
  yellow_disk_img: HTMLImageElement;
  red_disk_img: HTMLImageElement;
  portal_right_img: HTMLImageElement;
  portal_left_img: HTMLImageElement;
  portal_left_right_img: HTMLImageElement;
  portal_up_down_img: HTMLImageElement;
  portal_up_img: HTMLImageElement;
  portal_down_img: HTMLImageElement;
  portal_cross_img: HTMLImageElement;
  a2_img: HTMLImageElement;
  a3_img: HTMLImageElement;
  a5_img: HTMLImageElement;
  a6_img: HTMLImageElement;
  P_img: HTMLImageElement;
  W_img: HTMLImageElement;
  N_img: HTMLImageElement;
  L_img: HTMLImageElement;
  M_img: HTMLImageElement;
  Hardware7_img: HTMLImageElement;

  GAME_OBJECTS: Array<any> = [];

  multiplayer: boolean = false;
  animation: boolean | undefined = false;

  constructor() {
    this.counter = 0;
    this.ground_img = new Image();
    this.merphy_img = new Image();
    this.wall_img = new Image();
    this.ram_img = new Image();
    this.rock_img = new Image();
    this.food_img = new Image();
    this.exit_img = new Image();
    this.scissors_img = new Image();
    this.electron_img = new Image();
    this.ram2_img = new Image();
    this.ram3_img = new Image();
    this.ram4_img = new Image();
    this.ram5_img = new Image();
    this.bug_img = new Image();
    this.computer_img = new Image();
    this.orange_disk_img = new Image();
    this.yellow_disk_img = new Image();
    this.red_disk_img = new Image();
    this.portal_right_img = new Image();
    this.portal_left_img = new Image();
    this.portal_left_right_img = new Image();
    this.portal_up_down_img = new Image();
    this.portal_down_img = new Image();
    this.portal_up_img = new Image();
    this.portal_cross_img = new Image();
    this.P_img = new Image();
    this.W_img = new Image();
    this.N_img = new Image();
    this.L_img = new Image();
    this.M_img = new Image();
    this.a2_img = new Image();
    this.a3_img = new Image();
    this.a5_img = new Image();
    this.a6_img = new Image();
    this.Hardware7_img = new Image();
    this.ground_img.src = ground;
    this.merphy_img.src = merphy;
    this.wall_img.src = wall;
    this.ram_img.src = ram;
    this.rock_img.src = rock;
    this.food_img.src = food;
    this.exit_img.src = exit;
    this.scissors_img.src = scissors;
    this.electron_img.src = electron;
    this.ram2_img.src = ram2;
    this.ram3_img.src = ram3;
    this.ram4_img.src = ram4;
    this.ram5_img.src = ram5;
    this.bug_img.src = bug;
    this.computer_img.src = computer;
    this.orange_disk_img.src = orange_disk;
    this.yellow_disk_img.src = yellow_disk;
    this.red_disk_img.src = red_disk;
    this.portal_right_img.src = portal_right;
    this.portal_left_img.src = portal_left;
    this.portal_left_right_img.src = portal_left_right;
    this.portal_up_down_img.src = portal_up_down;
    this.portal_up_img.src = portal_up;
    this.portal_down_img.src = portal_down;
    this.portal_cross_img.src = portal_cross;
    this.P_img.src = P;
    this.W_img.src = W;
    this.N_img.src = N;
    this.L_img.src = L;
    this.M_img.src = M;
    this.Hardware7_img.src = Hardware7;
    this.a2_img.src = a2;
    this.a3_img.src = a3;
    this.a5_img.src = a5;
    this.a6_img.src = a6;
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
    this.player2?.draw(context, viewport_start_y, viewport_start_x);
  }

  draw(context: CanvasRenderingContext2D, value: number) {
    context.fillStyle = "black";

    context.fillRect(0, 0, this.viewport_w, this.viewport_h);

    const viewport_start_x = this.player!.x - Math.floor(this.width / 2);
    const viewport_start_y = this.player!.y - Math.floor(this.height / 2);

    this.GAME_OBJECTS.forEach((elem) =>
      elem.draw(
        context,
        this.player!.direction || "",
        this.player!.animation,
        viewport_start_y,
        viewport_start_x,
        value
      )
    );

    this.player2 &&
      this.player2?.draw_as_second(
        context,
        this.player!.direction || "",
        this.player!.animation,
        viewport_start_y,
        viewport_start_x,
        value
      );

    this.player?.draw(context, viewport_start_y, viewport_start_x);
  }

  setMultiplayer() {
    this.multiplayer = true;
    this.player2 = new Player(this.player!.y, this.player!.x);
  }

  resetMultiplayer() {
    this.multiplayer = false;
    if (this.player2) this.world_map[this.player2!.y][this.player2!.x] = " ";
    this.player2 = null;
  }

  updateMap() {
    const copy = Array.from({ length: this.world_map.length }, () =>
      Array.from({ length: this.world_map[0].length }, () => " ")
    );

    if (this.player)
      this.GAME_OBJECTS = this.GAME_OBJECTS.filter((item) => {
        const flag1 = item.x !== this.player!.x;
        const flag2 = item.y !== this.player!.y;
        return flag1 || flag2;
      });

    if (this.player2)
      this.GAME_OBJECTS = this.GAME_OBJECTS.filter((item) => {
        const flag1 = item.x !== this.player2!.x;
        const flag2 = item.y !== this.player2!.y;
        return flag1 || flag2;
      });

    this.GAME_OBJECTS.forEach((F) => {
      copy[F.y][F.x] = F.char;
    });

    copy[this.player!.y][this.player!.x] = "A";
    if (this.player2) copy[this.player2!.y][this.player2!.x] = "H";

    return copy;
  }

  tick() {
    this.player!.updateState();
    if (this.player2) this.player2.updateState();

    this.GAME_OBJECTS.forEach((item) => item.updateState());
    this.GAME_OBJECTS.sort((a, b) => b.y - a.y);

    this.world_map = this.updateMap();
    this.counter++;
  }

  setMap(world_map: string[][]) {
    this.resetWorld();
    this.width = this.viewport_w / World.BLOCK_WIDTH;
    this.height = world_map.length;
    this.world_map = world_map;

    world_map.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === "A") {
          this.player = new Player(y, x);
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
      });
    });

    this.GAME_OBJECTS.sort((a, b) => b.y - a.y);
  }

  resetWorld() {
    this.world_map = [];

    this.GAME_OBJECTS = [];

    this.player = null;
    this.player2 = null;
  }
}

export default new World();
