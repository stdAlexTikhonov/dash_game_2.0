import portal_up_down from "../assets/images/portal_up_down.png";
import GameObject from "./GameObject";
export default class PortalUpDown extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "5");
    this.img.src = portal_up_down;
  }
}
