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
import bug from "../assets/images/bug.png";
import computer from "../assets/images/computer.png";
import orange_disk from "../assets/images/orange_disk.png";
import yellow_disk from "../assets/images/yellow_disk.png";
import portal_right from "../assets/images/portal_right.png";
import portal_left from "../assets/images/portal_left.png";
import P from "../assets/images/P.png";
import W from "../assets/images/W.png";
import N from "../assets/images/N.png";
import L from "../assets/images/L.png";
import M from "../assets/images/M.png";
import { Player } from "./Player";
class World {
  viewport_w: number = window.innerWidth;
  viewport_h: number = document.body.clientHeight;
  width: number = 0;
  height: number = 0;
  counter: number;
  world_map: string[][] = [];
  ground_img: HTMLImageElement;
  merphy_img: HTMLImageElement;
  wall_img: HTMLImageElement;
  ram_img: HTMLImageElement;
  player: Player | null = null;
  rock_img: HTMLImageElement;
  food_img: HTMLImageElement;
  exit_img: HTMLImageElement;
  scissors_img: HTMLImageElement;
  electron_img: HTMLImageElement;
  ram2_img: HTMLImageElement;
  ram3_img: HTMLImageElement;
  bug_img: HTMLImageElement;
  computer_img: HTMLImageElement;
  orange_disk_img: HTMLImageElement;
  yellow_disk_img: HTMLImageElement;
  portal_right_img: HTMLImageElement;
  portal_left_img: HTMLImageElement;
  P_img: HTMLImageElement;
  W_img: HTMLImageElement;
  N_img: HTMLImageElement;
  L_img: HTMLImageElement;
  M_img: HTMLImageElement;

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
    this.bug_img = new Image();
    this.computer_img = new Image();
    this.orange_disk_img = new Image();
    this.yellow_disk_img = new Image();
    this.portal_right_img = new Image();
    this.portal_left_img = new Image();
    this.P_img = new Image();
    this.W_img = new Image();
    this.N_img = new Image();
    this.L_img = new Image();
    this.M_img = new Image();
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
    this.bug_img.src = bug;
    this.computer_img.src = computer;
    this.orange_disk_img.src = orange_disk;
    this.yellow_disk_img.src = yellow_disk;
    this.portal_right_img.src = portal_right;
    this.portal_left_img.src = portal_left;
    this.P_img.src = P;
    this.W_img.src = W;
    this.N_img.src = N;
    this.L_img.src = L;
    this.M_img.src = M;
  }

  static BLOCK_WIDTH = 32;

  draw(context: CanvasRenderingContext2D) {
    const state8 = this.counter % 8;
    const state6 = this.counter % 6;
    const state3 = this.counter % 3;

    context.fillRect(0, 0, this.viewport_w, this.viewport_h);

    const viewport_start_x = this.player!.x - Math.floor(this.width / 2);
    const viewport_start_y = this.player!.y - Math.floor(this.height / 2);
    const viewport_end_x = viewport_start_x + this.width;
    const viewport_end_y = viewport_start_y + this.height;

    this.world_map.forEach((row, y) => {
      const draw_view_y_flag = y >= viewport_start_y - 1 && y <= viewport_end_y;
      row.forEach((cell, x) => {
        const draw_view_x_flag =
          x >= viewport_start_x - 1 && x <= viewport_end_x;

        if (draw_view_y_flag && draw_view_x_flag) {
          let pos_x = (x - viewport_start_x) * World.BLOCK_WIDTH;
          let pos_y = (y - viewport_start_y) * World.BLOCK_WIDTH;
          if (cell === ".")
            context!.drawImage(
              this.ground_img,
              pos_x,
              pos_y,
              World.BLOCK_WIDTH,
              World.BLOCK_WIDTH
            );

          if (cell === "A")
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

          // if (cell === "H")
          //   context!.drawImage(
          //     merphy_img,
          //     state3 * World.BLOCK_WIDTH,
          //     GameStore.players[1].dy * World.BLOCK_WIDTH,
          //     World.BLOCK_WIDTH,
          //     World.BLOCK_WIDTH,
          //     pos_x,
          //     pos_y,
          //     World.BLOCK_WIDTH,
          //     World.BLOCK_WIDTH
          //   );

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
        }
      });
    });
  }

  updateMap() {
    const copy = Array.from({ length: this.height }, () =>
      Array.from({ length: this.width }, () => " ")
    );

    // copy[this.player!.y][this.player!.x] = "A";
    copy[this.player!.y][this.player!.x] = "A";

    return copy;
  }

  tick() {
    this.player!.updateState(this.world_map);
    this.world_map = this.updateMap();
    this.counter++;
  }

  setMap(world_map: string[][]) {
    this.width = world_map[0].length;
    this.height = world_map.length;
    this.world_map = world_map;
    world_map.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === "A") this.player = new Player(y, x);
      });
    });
  }
}

export default new World();
