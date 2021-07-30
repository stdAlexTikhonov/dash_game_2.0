import GameObject from "./GameObject";
import ground from "../assets/images/ground.png";
import ground_sound from "../assets/audio/ground.mp3";
import World from "./World";
import { BLOCK_WIDTH } from "../utils/constansts";

export default class Motherboard extends GameObject {
  img: HTMLImageElement = new Image();
  static ground_sound: HTMLMediaElement = new Audio(ground_sound);

  constructor(y: number, x: number) {
    super(y, x, ".");
    this.img.src = ground;
  }

  check_player() {
    const { player } = World;
    if (player) {
      if (player!.x === this.x && player!.y === this.y) this.collect();

      if (
        player.x === this.x &&
        player.y === this.y + 1 &&
        player.action &&
        player.direction === "UP"
      ) {
        this.collect();
      }

      if (
        player.x === this.x &&
        player.y === this.y - 1 &&
        player.action &&
        player.direction === "DOWN"
      ) {
        this.collect();
      }

      if (
        player.x === this.x - 1 &&
        player.y === this.y &&
        player.action &&
        player.direction === "RIGHT"
      ) {
        this.collect();
      }

      if (
        player.x === this.x + 1 &&
        player.y === this.y &&
        player.action &&
        player.direction === "LEFT"
      ) {
        this.collect();
      }
    }
  }

  collect() {
    this.finished = true;
    Motherboard.ground_sound.currentTime = 0;
    Motherboard.ground_sound.play();
  }

  updateState() {
    this.check_player();
  }
}
