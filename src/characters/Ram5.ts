import GameObject from "./GameObject";
import ram5 from "../assets/images/RAM_5.png";
export default class Ram5 extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "4");
    this.img.src = ram5;
  }
}
