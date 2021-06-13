import portal_up from "../assets/images/portal_up.png";
import GameObject from "./GameObject";
export default class PortalUp extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "^");
    this.img.src = portal_up;
  }
}
