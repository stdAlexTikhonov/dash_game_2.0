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

  GAME_OBJECTS: Array<FallingObject | GameObject> = [];

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
    const state8 = this.counter % 8;
    const state6 = this.counter % 6;
    const state3 = this.counter % 3;

    context.fillStyle = "black";

    context.fillRect(0, 0, this.viewport_w, this.viewport_h);

    const viewport_start_x = this.player2!.x - Math.floor(this.width / 2);
    const viewport_start_y = this.player2!.y - Math.floor(this.height / 2);
    const viewport_end_x = viewport_start_x + this.width;
    const viewport_end_y = viewport_start_y + this.height;

    this.world_map.forEach((row, y) => {
      const draw_view_y_flag = y >= viewport_start_y - 1 && y <= viewport_end_y;
      row.forEach((cell, x) => {
        const draw_view_x_flag =
          x >= viewport_start_x - 1 && x <= viewport_end_x;

        // if (draw_view_y_flag && draw_view_x_flag) {
        let pos_x = (x - viewport_start_x) * World.BLOCK_WIDTH;
        let pos_y = (y - viewport_start_y) * World.BLOCK_WIDTH;
        // if (this.player2?.animation)
        //   switch (this.player2?.direction) {
        //     case "RIGHT":
        //       pos_x -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
        //       break;
        //     case "LEFT":
        //       pos_x += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
        //       break;
        //     case "UP":
        //       pos_y += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
        //       break;
        //     case "DOWN":
        //       pos_y -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
        //       break;
        //   }

        if (cell === ".")
          context!.drawImage(
            this.ground_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "A") {
          // if (this.player?.animation)
          //   switch (this.player?.direction) {
          //     case "RIGHT":
          //       pos_x += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
          //       break;
          //     case "LEFT":
          //       pos_x -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
          //       break;
          //     case "UP":
          //       pos_y -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
          //       break;
          //     case "DOWN":
          //       pos_y += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
          //       break;
          //   }
          context!.drawImage(
            this.merphy_img,
            state3 * World.BLOCK_WIDTH,
            this.player!.dy * World.BLOCK_WIDTH,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );
        }
        if (cell === "H") {
          // if (this.player2?.animation)
          //   switch (this.player2?.direction) {
          //     case "RIGHT":
          //       pos_x += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
          //       break;
          //     case "LEFT":
          //       pos_x -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
          //       break;
          //     case "UP":
          //       pos_y -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
          //       break;
          //     case "DOWN":
          //       pos_y += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
          //       break;
          //   }
          context!.drawImage(
            this.merphy_img,
            state3 * World.BLOCK_WIDTH,
            this.player2!.dy * World.BLOCK_WIDTH,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );
        }

        if (cell === "#")
          context!.drawImage(
            this.wall_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "+")
          context!.drawImage(
            this.ram_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "O")
          context!.drawImage(
            this.rock_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "*")
          context!.drawImage(
            this.food_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "E")
          context!.drawImage(
            this.exit_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "X")
          context!.drawImage(
            this.scissors_img,
            state8 * World.BLOCK_WIDTH,
            0,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "Z")
          context!.drawImage(
            this.electron_img,
            state6 * World.BLOCK_WIDTH,
            0,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "R")
          context!.drawImage(
            this.ram2_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "U")
          context!.drawImage(
            this.ram3_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "B")
          context!.drawImage(
            this.bug_img,
            state6 * World.BLOCK_WIDTH,
            0,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "C")
          context!.drawImage(
            this.computer_img,
            state8 * World.BLOCK_WIDTH,
            0,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "D")
          context!.drawImage(
            this.orange_disk_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "Y")
          context!.drawImage(
            this.yellow_disk_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === ">")
          context!.drawImage(
            this.portal_right_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "<")
          context!.drawImage(
            this.portal_left_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "P")
          context!.drawImage(
            this.P_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "W")
          context!.drawImage(
            this.W_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "N")
          context!.drawImage(
            this.N_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "L")
          context!.drawImage(
            this.L_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "M")
          context!.drawImage(
            this.M_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "6")
          context!.drawImage(
            this.Hardware7_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "2")
          context!.drawImage(
            this.portal_left_right_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "3")
          context!.drawImage(
            this.ram4_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "4")
          context!.drawImage(
            this.ram5_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "5")
          context!.drawImage(
            this.portal_up_down_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "^")
          context!.drawImage(
            this.portal_up_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "&")
          context!.drawImage(
            this.portal_down_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "1")
          context!.drawImage(
            this.a2_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "7")
          context!.drawImage(
            this.a5_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "8")
          context!.drawImage(
            this.a6_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "9")
          context!.drawImage(
            this.a3_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );

        if (cell === "F")
          context!.drawImage(
            this.portal_cross_img,
            pos_x,
            pos_y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );
        // }
      });
    });
  }

  draw(context: CanvasRenderingContext2D, value: number) {
    const state8 = this.counter % 8;
    const state6 = this.counter % 6;
    const state3 = this.counter % 3;

    context.fillStyle = "black";

    context.fillRect(0, 0, this.viewport_w, this.viewport_h);

    const viewport_start_x = this.player!.x - Math.floor(this.width / 2);
    const viewport_start_y = this.player!.y - Math.floor(this.height / 2);
    const viewport_end_x = viewport_start_x + this.width;
    const viewport_end_y = viewport_start_y + this.height;

    this.GAME_OBJECTS.forEach((elem) =>
      elem.draw(context, viewport_start_y, viewport_start_x)
    );

    this.player?.draw(context, viewport_start_y, viewport_start_x);

    // this.world_map.forEach((row, y) => {
    //   const draw_view_y_flag = y >= viewport_start_y - 1 && y <= viewport_end_y;
    //   row.forEach((cell, x) => {
    //     const draw_view_x_flag =
    //       x >= viewport_start_x - 1 && x <= viewport_end_x;

    //     // if (draw_view_y_flag && draw_view_x_flag) {
    //     let pos_x = (x - viewport_start_x) * World.BLOCK_WIDTH;
    //     let pos_y = (y - viewport_start_y) * World.BLOCK_WIDTH;

    //     // if (this.player?.animation)
    //     //   switch (this.player?.direction) {
    //     //     case "RIGHT":
    //     //       pos_x -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //     //       break;
    //     //     case "LEFT":
    //     //       pos_x += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //     //       break;
    //     //     case "UP":
    //     //       pos_y += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //     //       break;
    //     //     case "DOWN":
    //     //       pos_y -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //     //       break;
    //     //   }

    //     if (cell === ".")
    //       context!.drawImage(
    //         this.ground_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "A") {
    //       // if (this.player?.animation)
    //       //   switch (this.player?.direction) {
    //       //     case "RIGHT":
    //       //       pos_x += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //       //       break;
    //       //     case "LEFT":
    //       //       pos_x -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //       //       break;
    //       //     case "UP":
    //       //       pos_y -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //       //       break;
    //       //     case "DOWN":
    //       //       pos_y += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //       //       break;
    //       //   }
    //       context!.drawImage(
    //         this.merphy_img,
    //         state3 * World.BLOCK_WIDTH,
    //         this.player!.dy * World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );
    //     }
    //     if (cell === "H") {
    //       // if (this.player2?.animation)
    //       //   switch (this.player2?.direction) {
    //       //     case "RIGHT":
    //       //       pos_x += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //       //       break;
    //       //     case "LEFT":
    //       //       pos_x -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //       //       break;
    //       //     case "UP":
    //       //       pos_y -= (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //       //       break;
    //       //     case "DOWN":
    //       //       pos_y += (World.BLOCK_WIDTH / 6) * value - World.BLOCK_WIDTH;
    //       //       break;
    //       //   }
    //       context!.drawImage(
    //         this.merphy_img,
    //         state3 * World.BLOCK_WIDTH,
    //         this.player2!.dy * World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );
    //     }

    //     if (cell === "#")
    //       context!.drawImage(
    //         this.wall_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "+")
    //       context!.drawImage(
    //         this.ram_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "O")
    //       context!.drawImage(
    //         this.rock_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "*")
    //       context!.drawImage(
    //         this.food_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "E")
    //       context!.drawImage(
    //         this.exit_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "X")
    //       context!.drawImage(
    //         this.scissors_img,
    //         state8 * World.BLOCK_WIDTH,
    //         0,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "Z")
    //       context!.drawImage(
    //         this.electron_img,
    //         state6 * World.BLOCK_WIDTH,
    //         0,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "R")
    //       context!.drawImage(
    //         this.ram2_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "U")
    //       context!.drawImage(
    //         this.ram3_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "B")
    //       context!.drawImage(
    //         this.bug_img,
    //         state6 * World.BLOCK_WIDTH,
    //         0,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "C")
    //       context!.drawImage(
    //         this.computer_img,
    //         state8 * World.BLOCK_WIDTH,
    //         0,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "D")
    //       context!.drawImage(
    //         this.orange_disk_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "Y")
    //       context!.drawImage(
    //         this.yellow_disk_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "%")
    //       context!.drawImage(
    //         this.red_disk_img,
    //         0,
    //         0,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === ">")
    //       context!.drawImage(
    //         this.portal_right_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "<")
    //       context!.drawImage(
    //         this.portal_left_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "P")
    //       context!.drawImage(
    //         this.P_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "W")
    //       context!.drawImage(
    //         this.W_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "N")
    //       context!.drawImage(
    //         this.N_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "L")
    //       context!.drawImage(
    //         this.L_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "M")
    //       context!.drawImage(
    //         this.M_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "6")
    //       context!.drawImage(
    //         this.Hardware7_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "2")
    //       context!.drawImage(
    //         this.portal_left_right_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "3")
    //       context!.drawImage(
    //         this.ram4_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "4")
    //       context!.drawImage(
    //         this.ram5_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "5")
    //       context!.drawImage(
    //         this.portal_up_down_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "^")
    //       context!.drawImage(
    //         this.portal_up_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "&")
    //       context!.drawImage(
    //         this.portal_down_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "1")
    //       context!.drawImage(
    //         this.a2_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "7")
    //       context!.drawImage(
    //         this.a5_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "8")
    //       context!.drawImage(
    //         this.a6_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "9")
    //       context!.drawImage(
    //         this.a3_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );

    //     if (cell === "F")
    //       context!.drawImage(
    //         this.portal_cross_img,
    //         pos_x,
    //         pos_y,
    //         World.BLOCK_WIDTH,
    //         World.BLOCK_WIDTH
    //       );
    //     // }
    //   });
    // });
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
        if (cell === "C") this.GAME_OBJECTS.push(new GameObject(y, x, "C"));
        if (cell === "B") this.GAME_OBJECTS.push(new GameObject(y, x, "B"));
        if (cell === "D") this.GAME_OBJECTS.push(new FallingObject(y, x, "D"));
        if (cell === "Y") this.GAME_OBJECTS.push(new GameObject(y, x, "Y"));
        if (cell === "%") this.GAME_OBJECTS.push(new GameObject(y, x, "%"));
        if (cell === "<") this.GAME_OBJECTS.push(new GameObject(y, x, "<"));
        if (cell === ">") this.GAME_OBJECTS.push(new GameObject(y, x, ">"));
        if (cell === "P") this.GAME_OBJECTS.push(new GameObject(y, x, "P"));
        if (cell === "W") this.GAME_OBJECTS.push(new GameObject(y, x, "W"));
        if (cell === "N") this.GAME_OBJECTS.push(new GameObject(y, x, "N"));
        if (cell === "L") this.GAME_OBJECTS.push(new GameObject(y, x, "L"));
        if (cell === "M") this.GAME_OBJECTS.push(new GameObject(y, x, "M"));
        if (cell === "6") this.GAME_OBJECTS.push(new GameObject(y, x, "6"));
        if (cell === "2") this.GAME_OBJECTS.push(new GameObject(y, x, "2"));
        if (cell === "3") this.GAME_OBJECTS.push(new Ram4(y, x));
        if (cell === "4") this.GAME_OBJECTS.push(new Ram5(y, x));
        if (cell === "5") this.GAME_OBJECTS.push(new GameObject(y, x, "5"));
        if (cell === "^") this.GAME_OBJECTS.push(new GameObject(y, x, "^"));
        if (cell === "&") this.GAME_OBJECTS.push(new GameObject(y, x, "&"));
        if (cell === "1") this.GAME_OBJECTS.push(new GameObject(y, x, "1"));
        if (cell === "7") this.GAME_OBJECTS.push(new GameObject(y, x, "7"));
        if (cell === "8") this.GAME_OBJECTS.push(new GameObject(y, x, "8"));
        if (cell === "9") this.GAME_OBJECTS.push(new GameObject(y, x, "9"));
        if (cell === "F") this.GAME_OBJECTS.push(new GameObject(y, x, "F"));
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
