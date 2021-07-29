import GameObject from "./GameObject";
import ground from "../assets/images/ground.png";
import ground_sound from "../assets/audio/ground.mp3";
import World from "./World";

export default class Motherboard extends GameObject {
  img: HTMLImageElement = new Image();
  static ground_sound: HTMLMediaElement = new Audio(ground_sound);

  constructor(y: number, x: number) {
    super(y, x, ".");
    this.img.src = ground;
  }

  check_player() {
    const player = World.GAME_OBJECTS.find(
      (item) => item.x === this.x && item.y === this.y && item.char === "A"
    );

    if (player) this.collect();
  }

  collect() {
    this.finished = true;
    Motherboard.ground_sound.currentTime = 0;
    Motherboard.ground_sound.play();
  }

  updateState() {
    this.check_player();
  }
}
