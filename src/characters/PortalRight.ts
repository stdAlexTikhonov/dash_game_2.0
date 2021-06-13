import portal_right from "../assets/images/portal_right.png";
import GameObject from "./GameObject";
export default class PortalRight extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, ">");
    this.img.src = portal_right;
  }
}
