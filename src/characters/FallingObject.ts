import GameObject from "./GameObject";
import World from "./World";

export default class FallingObject extends GameObject {
  falling: boolean;
  constructor(y: number, x: number) {
    super(y, x);
    this.falling = false;
  }

  check_way_down() {
    const { world_map } = World;
    if (world_map[this.y + 1]) {
      //если элемент впринципе отсутствует на карте
      if (!world_map[this.y + 1][this.x]) return true;
      else return world_map[this.y + 1][this.x] === " ";
    }
    return false;
  }

  updateState() {
    if (this.check_way_down()) {
      this.falling = true;
      this.y += 1;
    } else {
      this.falling = false;
    }
  }
}
