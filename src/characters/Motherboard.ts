import GameObject from "./GameObject";
import ground from "../assets/images/ground.png";

export default class Motherboard extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, ".");
    this.img.src = ground;
  }
}
