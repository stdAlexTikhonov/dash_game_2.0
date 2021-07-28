import Bomb from "./Bomb";
import red_disk from "../assets/images/red_disk.png";
export default class RedDisc extends Bomb {
  img: HTMLImageElement = new Image();
  activated: boolean = false;

  count = 10;

  constructor(y: number, x: number, activated: boolean = false) {
    super(y, x, "%");
    this.img.src = red_disk;
    this.activated = activated;
  }

  collect() {
    this.finished = true;
  }

  updateState() {
    super.updateState();
    if (this.activated) this.count--;
    if (this.count <= 0) this.detonate();
  }
}
