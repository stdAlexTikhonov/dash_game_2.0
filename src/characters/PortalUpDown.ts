import portal_up_down from "../assets/images/portal_up_down.png";
import Portal from "./Portal";
export default class PortalUpDown extends Portal {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "5");
    this.img.src = portal_up_down;
    this.type = "UP_DOWN";
  }
}
