import GameObject from "./GameObject";
import wall from "../assets/images/wall.png";
export default class Wall extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "#");
    this.img.src = wall;
  }
}
