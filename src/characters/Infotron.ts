import FallingObject from "./FallingObject";
import food from "../assets/images/food.png";
import { BLOCK_WIDTH } from "../utils/constansts";
import infotron_sound from "../assets/audio/Infotron.mp3";
import World from "./World";
import { store } from "../store/store";
import { addScore } from "../store/playerSlice";

export default class Infotron extends FallingObject {
  img: HTMLImageElement = new Image();
  state: number = 0;
  static quantity: number = 0;
  static collect_audio: HTMLMediaElement = new Audio(infotron_sound);

  constructor(y: number, x: number) {
    super(y, x, "*");
    this.img.src = food;
    Infotron.quantity += 1;
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
    store.dispatch(addScore());
    Infotron.collect_audio.currentTime = 0;
    Infotron.collect_audio.play();
    this.finished = true;
  }

  draw(
    context: CanvasRenderingContext2D,
    direction: string,
    animation: boolean,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    super.draw(
      context,
      direction,
      animation,
      viewport_start_y,
      viewport_start_x,
      value,
      this.left || this.right ? this.state % 8 : 0,
      this.left ? BLOCK_WIDTH : 0
    );
    this.state += 1;
  }

  updateState() {
    super.updateState();
    this.check_player();
  }
}
