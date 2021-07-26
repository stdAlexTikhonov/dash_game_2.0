import portal_right from "../assets/images/portal_right.png";
import Portal from "./Portal";
export default class PortalRight extends Portal {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, ">");
    this.img.src = portal_right;
    this.type = "RIGHT";
  }
}
