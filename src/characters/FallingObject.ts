import GameObject from "./GameObject";
import World from "./World";

export default class FallingObject extends GameObject {
  check_way_down() {
    const { world_map } = World;
    if (world_map[this.y + 1]) {
      //если элемент впринципе отсутствует на карте
      if (!world_map[this.y + 1][this.x]) return true;
      else return world_map[this.y + 1][this.x] === " ";
    }
    return false;
  }

  check_way_right() {
    const { world_map } = World;
    return (
      world_map[this.y][this.x + 1] === " " &&
      world_map[this.y + 1][this.x + 1] === " " &&
      !["O", "*"].includes(world_map[this.y - 1][this.x + 1])
    );
  }

  check_way_left() {
    const { world_map } = World;
    return (
      world_map[this.y][this.x - 1] === " " &&
      world_map[this.y + 1][this.x - 1] === " " &&
      !["O", "*"].includes(world_map[this.y - 1][this.x - 1])
    );
  }

  move_possible() {
    const { world_map } = World;

    return world_map[this.y + 1]
      ? ["+", "O", "*"].includes(world_map[this.y + 1][this.x])
      : false;
  }

  updateState() {
    if (this.check_way_down()) {
      this.y += 1;
    } else if (this.move_possible() && this.check_way_left()) {
      this.x -= 1;
    } else if (this.move_possible() && this.check_way_right()) {
      this.x += 1;
    }
  }
}
