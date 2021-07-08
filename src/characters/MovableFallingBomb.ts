import MovableFallingObject from "./MovableFallingObject";
import World from "./World";
import Explosion from "./Explosion";

export default class MovableFallingBomb extends MovableFallingObject {
  constructor(y: number, x: number, char: string) {
    super(y, x, char, true);
  }

  detonated: boolean = false;

  detonate() {
    this.detonated = true;
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

  updateState() {
    super.updateState();
    if (this.detonated) this.explode();
  }
}
