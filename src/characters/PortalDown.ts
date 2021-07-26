import portal_down from "../assets/images/portal_down.png";
import Portal from "./Portal";
export default class PortalDown extends Portal {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "&");
    this.img.src = portal_down;
    this.type = "DOWN";
  }
}
