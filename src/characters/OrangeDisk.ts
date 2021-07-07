import MovableFallingBomb from "./MovableFallingBomb";
import orange_disk from "../assets/images/orange_disk.png";

export default class OrangeDisk extends MovableFallingBomb {
  img: HTMLImageElement = new Image();
  detonated: boolean = false;

  constructor(y: number, x: number) {
    super(y, x, "D");
    this.img.src = orange_disk;
  }

  updateState() {
    super.updateState();
    if (this.fallen) this.explode();
  }
}
