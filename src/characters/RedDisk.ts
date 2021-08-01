import Bomb from "./Bomb";
import red_disk from "../assets/images/red_disk.png";
import { BLOCK_WIDTH } from "../utils/constansts";
import World from "./World";
import { store } from "../store/store";
import { addBomb } from "../store/playerSlice";
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
    const { player } = World;

    if (player) {
      if (player!.x === this.x && player!.y === this.y && !this.activated) {
        this.finished = true;
        player!.bombs++;
        store.dispatch(addBomb());
      }

      if (
        player.x === this.x &&
        player.y === this.y + 1 &&
        player.action &&
        player.direction === "UP"
      ) {
        this.finished = true;
        player!.bombs++;
        store.dispatch(addBomb());
      }

      if (
        player.x === this.x &&
        player.y === this.y - 1 &&
        player.action &&
        player.direction === "DOWN"
      ) {
        this.finished = true;
        player!.bombs++;
        store.dispatch(addBomb());
      }

      if (
        player.x === this.x - 1 &&
        player.y === this.y &&
        player.action &&
        player.direction === "RIGHT"
      ) {
        this.finished = true;
        player!.bombs++;
        store.dispatch(addBomb());
      }

      if (
        player.x === this.x + 1 &&
        player.y === this.y &&
        player.action &&
        player.direction === "LEFT"
      ) {
        this.finished = true;
        player!.bombs++;
        store.dispatch(addBomb());
      }
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
