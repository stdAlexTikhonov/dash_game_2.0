import Bomb from "./Bomb";
import red_disk from "../assets/images/red_disk.png";
export default class Infotron extends Bomb {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "%");
    this.img.src = red_disk;
  }

  updateState() {
    super.updateState();
  }
}
