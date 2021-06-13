import portal_cross from "../assets/images/portal_cross.png";
import GameObject from "./GameObject";

export default class PortalCross extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "F");
    this.img.src = portal_cross;
  }
}
