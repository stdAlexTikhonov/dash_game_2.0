import GameObject from "./GameObject";
export default class EmptyBlock extends GameObject {
  state: number = 0;

  constructor(y: number, x: number) {
    super(y, x, " ");
  }

  updateState() {
    this.state++;
    this.finished = this.state > 0;
  }
}
