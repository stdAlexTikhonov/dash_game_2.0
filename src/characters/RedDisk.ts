import Bomb from "./Bomb";
import red_disk from "../assets/images/red_disk.png";
import { BLOCK_WIDTH } from "../utils/constansts";
import World from "./World";
export default class RedDisc extends Bomb {
  img: HTMLImageElement = new Image();
  activated: boolean = false;

  count = 10;

  constructor(y: number, x: number, activated: boolean = false) {
    super(y, x, "%");
    this.img.src = red_disk;
    this.activated = activated;
  }

  check_player() {
    const player = World.GAME_OBJECTS.find(
      (item) => item.x === this.x && item.y === this.y && item.char === "A"
    );

    if (player && !this.activated) {
      this.finished = true;
      player.bombs++;
    }
  }

  updateState() {
    super.updateState();
    this.check_player();
    if (this.activated) this.count--;
    if (this.count <= 0) this.detonate();
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
      this.count % 2 === 0 ? 0 : BLOCK_WIDTH
    );
  }
}
