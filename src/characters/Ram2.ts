import GameObject from "./GameObject";
import ram2 from "../assets/images/RAM2.png";
export default class Ram2 extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "R");
    this.img.src = ram2;
  }
}
