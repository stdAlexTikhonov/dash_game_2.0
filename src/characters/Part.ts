import GameObject from "./GameObject";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import a5 from "../assets/images/a5.png";
import a6 from "../assets/images/a6.png";
import P from "../assets/images/P.png";
import W from "../assets/images/W.png";
import N from "../assets/images/N.png";
import L from "../assets/images/L.png";
import M from "../assets/images/M.png";
import Hardware7 from "../assets/images/Hardware7.png";
export default class Part extends GameObject {
  img: HTMLImageElement = new Image();

  constructor(y: number, x: number, char: string) {
    super(y, x, char);
    switch (char) {
      case "1":
        this.img.src = a2;
        break;
      case "9":
        this.img.src = a3;
        break;
      case "7":
        this.img.src = a5;
        break;
      case "8":
        this.img.src = a6;
        break;
      case "P":
        this.img.src = P;
        break;
      case "W":
        this.img.src = W;
        break;
      case "N":
        this.img.src = N;
        break;
      case "L":
        this.img.src = L;
        break;
      case "M":
        this.img.src = M;
        break;
      case "6":
        this.img.src = Hardware7;
        break;
    }
  }
}
