import GameObject from "./GameObject";
import ram from "../assets/images/ram.png";
export default class Ram extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "+");
    this.img.src = ram;
  }
}
