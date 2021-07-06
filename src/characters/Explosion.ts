import GameObject from "./GameObject";
import explosion from "../assets/images/explosion.png";
import { getPosition } from "../utils/helpers";
import { BLOCK_WIDTH } from "../utils/constansts";
import boom from "../assets/audio/boom.mp3";

export default class Explosion extends GameObject {
  img: HTMLImageElement = new Image();
  state: number = 0;
  static audio: HTMLMediaElement = new Audio(boom);

  constructor(y: number, x: number) {
    super(y, x, "J");
    this.img.src = explosion;
    Explosion.audio.currentTime = 0;
    Explosion.audio.play();
  }

  draw(
    context: CanvasRenderingContext2D,
    direction: string,
    animation: boolean,
    viewport_start_y: number,
    viewport_start_x: number,
    value: number
  ) {
    const { pos_y, pos_x } = getPosition(
      direction,
      animation,
      (this.x - viewport_start_x) * BLOCK_WIDTH,
      (this.y - viewport_start_y) * BLOCK_WIDTH,
      value
    );

    context!.drawImage(
      this.img,
      this.state * BLOCK_WIDTH,
      0,
      BLOCK_WIDTH,
      BLOCK_WIDTH,
      pos_x,
      pos_y,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }

  updateState() {
    this.state++;
    this.finished = this.state > 7;
  }
}
