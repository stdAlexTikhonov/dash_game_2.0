import FallingObject from "./FallingObject";
import orange_disk from "../assets/images/orange_disk.png";

export default class Infotron extends FallingObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "D");
    this.img.src = orange_disk;
  }
}
