import GameObject from "./GameObject";
import yellow_disk from "../assets/images/yellow_disk.png";
export default class Infotron extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "Y");
    this.img.src = yellow_disk;
  }
}
