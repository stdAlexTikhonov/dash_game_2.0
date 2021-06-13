import exit from "../assets/images/exit.png";
import GameObject from "./GameObject";
export default class Exit extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "E");
    this.img.src = exit;
  }
}
