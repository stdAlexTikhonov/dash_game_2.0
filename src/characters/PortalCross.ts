import portal_cross from "../assets/images/portal_cross.png";
import Portal from "./Portal";

export default class PortalCross extends Portal {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "F");
    this.img.src = portal_cross;
    this.type = "CROSS";
  }
}
