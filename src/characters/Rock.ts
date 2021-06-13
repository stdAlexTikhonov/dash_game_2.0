import FallingObject from "./FallingObject";
import rock from "../assets/images/rock.png";
export default class Rock extends FallingObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "O");
    this.img.src = rock;
  }
}
