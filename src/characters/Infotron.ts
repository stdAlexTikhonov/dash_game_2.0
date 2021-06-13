import FallingObject from "./FallingObject";
import food from "../assets/images/food.png";

export default class Infotron extends FallingObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "*");
    this.img.src = food;
  }
}
