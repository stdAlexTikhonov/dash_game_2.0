import GameObject from "./GameObject";
import ground from "../assets/images/ground.png";
import ground_sound from "../assets/audio/ground.mp3";

export default class Motherboard extends GameObject {
  img: HTMLImageElement = new Image();
  static ground_sound: HTMLMediaElement = new Audio(ground_sound);

  constructor(y: number, x: number) {
    super(y, x, ".");
    this.img.src = ground;
  }

  collect() {
    Motherboard.ground_sound.currentTime = 0;
    Motherboard.ground_sound.play();
  }
}
