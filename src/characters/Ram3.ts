import GameObject from "./GameObject";
import ram3 from "../assets/images/RAM3.png";
export default class Ram3 extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "U");
    this.img.src = ram3;
  }
}
