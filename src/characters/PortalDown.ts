import portal_down from "../assets/images/portal_down.png";
import GameObject from "./GameObject";
export default class PortalDown extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number) {
    super(y, x, "&");
    this.img.src = portal_down;
  }
}
