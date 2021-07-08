import MovableObject from "./MovableObject";
import yellow_disk from "../assets/images/yellow_disk.png";
export default class YellowDisc extends MovableObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "Y");
    this.img.src = yellow_disk;
  }
}
