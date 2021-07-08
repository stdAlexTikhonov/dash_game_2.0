import Predator from "./Predator";
import scissors from "../assets/images/scissors.png";
import { getPosition, getPlayerPosition } from "../utils/helpers";
import { DIRS, BLOCK_WIDTH } from "../utils/constansts";
import World from "./World";
import Explosion from "./Explosion";

export default class Scissors extends Predator {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "X");
    this.img.src = scissors;
  }

  detonate_around() {
    const exclude: { y: number; x: number }[] = [];
    World.GAME_OBJECTS.forEach((item) => {
      if (item.x === this.x - 1 && item.y === this.y) {
        if (item.detonate) item.detonate();
        else if (item.char !== "#") item.finished = true;
        else exclude.push({ y: item.y, x: this.x - 1 });
      } else if (item.x === this.x + 1 && item.y === this.y) {
        if (item.detonate) item.detonate();
        else if (item.char !== "#") item.finished = true;
        else exclude.push({ y: item.y, x: this.x + 1 });
      } else if (item.x === this.x && item.y === this.y + 1) {
        if (item.detonate) item.detonate();
        else if (item.char !== "#") item.finished = true;
        else exclude.push({ y: item.y + 1, x: this.x });
      } else if (item.x === this.x && item.y === this.y - 1) {
        if (item.detonate) item.detonate();
        else if (item.char !== "#") item.finished = true;
        else exclude.push({ y: item.y - 1, x: this.x });
      } else if (item.x === this.x - 1 && item.y === this.y - 1) {
        if (item.detonate) item.detonate();
        else if (item.char !== "#") item.finished = true;
        else exclude.push({ y: item.y - 1, x: this.x - 1 });
      } else if (item.x === this.x + 1 && item.y === this.y - 1) {
        if (item.detonate) item.detonate();
        else if (item.char !== "#") item.finished = true;
        else exclude.push({ y: item.y - 1, x: this.x + 1 });
      } else if (item.x === this.x - 1 && item.y === this.y + 1) {
        if (item.detonate) item.detonate();
        else if (item.char !== "#") item.finished = true;
        else exclude.push({ y: item.y + 1, x: this.x - 1 });
      } else if (item.x === this.x + 1 && item.y === this.y + 1) {
        if (item.detonate) item.detonate();
        else if (item.char !== "#") item.finished = true;
        else exclude.push({ y: item.y + 1, x: this.x + 1 });
      }
    });

    return exclude;
  }

  explode() {
    this.finished = true;
    this.detonate_around();
    World.GAME_OBJECTS.push(new Explosion(this.y, this.x));
    World.GAME_OBJECTS.push(new Explosion(this.y, this.x - 1));
    World.GAME_OBJECTS.push(new Explosion(this.y, this.x + 1));
    World.GAME_OBJECTS.push(new Explosion(this.y + 1, this.x));
    World.GAME_OBJECTS.push(new Explosion(this.y - 1, this.x));
    World.GAME_OBJECTS.push(new Explosion(this.y - 1, this.x - 1));
    World.GAME_OBJECTS.push(new Explosion(this.y - 1, this.x + 1));
    World.GAME_OBJECTS.push(new Explosion(this.y + 1, this.x - 1));
    World.GAME_OBJECTS.push(new Explosion(this.y + 1, this.x + 1));
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

    const { pos_y: pos_y_plus, pos_x: pos_x_plus } = getPlayerPosition(
      this.dir,
      this.animation,
      pos_x,
      pos_y,
      value
    );

    const state8 = World.counter % 8;
    context!.drawImage(
      this.img,
      state8 * BLOCK_WIDTH,
      DIRS.indexOf(this.dir) * BLOCK_WIDTH,
      BLOCK_WIDTH,
      BLOCK_WIDTH,
      pos_x_plus,
      pos_y_plus,
      BLOCK_WIDTH,
      BLOCK_WIDTH
    );
  }

  updateState() {
    super.updateState();
    if (this.detonated) this.explode();
  }
}
