import portal_left from "../assets/images/portal_left.png";
import GameObject from "./GameObject";
export default class PortalLeft extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "<");
    this.img.src = portal_left;
  }
}
