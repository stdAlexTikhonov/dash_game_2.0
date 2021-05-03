import ground from "../assets/images/ground.png";

export class World {
  width: number;
  height: number;
  counter: number;
  world_map: string[][];
  ground_img: HTMLImageElement;
  constructor(world_map: string[][]) {
    this.width = world_map[0].length;
    this.height = world_map.length;
    this.counter = 0;
    this.world_map = world_map;
    this.ground_img = new Image();
    this.ground_img.src = ground;
  }

  static BLOCK_WIDTH = 32;

  draw(context: {
    drawImage: (
      arg0: HTMLImageElement,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number
    ) => void;
  }) {
    this.world_map.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === ".")
          context.drawImage(
            this.ground_img,
            x,
            y,
            World.BLOCK_WIDTH,
            World.BLOCK_WIDTH
          );
      });
    });
  }

  tick() {
    this.counter++;
  }
}
