import portal_up from "../assets/images/portal_up.png";
import Portal from "./Portal";
export default class PortalUp extends Portal {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "^");
    this.img.src = portal_up;
    this.type = "UP";
  }
}
