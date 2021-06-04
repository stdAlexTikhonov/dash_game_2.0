export default class GameObject {
  x: number;
  y: number;

  constructor(y: number, x: number) {
    this.y = y;
    this.x = x;
  }
}

export type GameObjectType = {
  x: number;
  y: number;
};
