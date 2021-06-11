export default class GameObject {
  x: number;
  y: number;
  char: string;

  constructor(y: number, x: number, char: string = " ") {
    this.y = y;
    this.x = x;
    this.char = char;
  }

  draw(
    context: CanvasRenderingContext2D,
    viewport_start_x: number,
    viewport_start_y: number
  ) {}

  updateState() {
    return;
  }
}
