import portal_left_right from "../assets/images/portal_left_right.png";
import Portal from "./Portal";
export default class PortalLeftRight extends Portal {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "2");
    this.img.src = portal_left_right;
    this.type = "LEFT_RIGHT";
  }
}
