import { BLOCK_WIDTH } from "./constansts";

export const getPosition = (
  dir: string | null,
  animation: boolean | null,
  pos_x: number,
  pos_y: number,
  value: number
) => {
  if (animation)
    switch (dir) {
      case "RIGHT":
        pos_x -= (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH;
        break;
      case "LEFT":
        pos_x += (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH;
        break;
      case "UP":
        pos_y += (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH;
        break;
      case "DOWN":
        pos_y -= (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH;
        break;
    }

  return { pos_y, pos_x };
};

export const getPlayerPosition = (
  dir: string | null,
  animation: boolean | null,
  pos_x: number,
  pos_y: number,
  value: number
) => {
  if (animation)
    switch (dir) {
      case "RIGHT":
        pos_x += (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH;
        break;
      case "LEFT":
        pos_x -= (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH;
        break;
      case "UP":
        pos_y -= (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH;
        break;
      case "DOWN":
        pos_y += (BLOCK_WIDTH / 6) * value - BLOCK_WIDTH;
        break;
    }

  return { pos_y, pos_x };
};
