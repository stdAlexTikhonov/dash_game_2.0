import GameObject from "./GameObject";
import ram4 from "../assets/images/RAM_4.png";
export default class Ram4 extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "3");
    this.img.src = ram4;
  }
}
