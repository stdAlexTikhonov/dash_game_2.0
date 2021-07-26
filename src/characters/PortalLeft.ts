import portal_left from "../assets/images/portal_left.png";
import Portal from "./Portal";
export default class PortalLeft extends Portal {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "<");
    this.img.src = portal_left;
    this.type = "LEFT";
  }
}
