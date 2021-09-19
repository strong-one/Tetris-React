import { useState, useCallback } from "react";
import { TETROMINOS, randomTetromino } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelpers";

export const usePlayer = () => {
  // create state, with useState hook imported, will return an array with 2 items

  // destructured
  const [player, setPlayer] = useState({
    // property - position for player
    pos: { x: 0, y: 0 },
    // one shape i createed to always keep in state
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    // setting state, moving player
    setPlayer((prev) => ({
      ...prev,
      // setting state with new x and y values and collided
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  // to keep game loop from going infinite
  const resetPlayer = useCallback(() => {
    setPlayer({
      // set stage from scratch, dividing by 2 - 2 so shape is in the middle. y at 0 so shape is at top
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      // each time is called will get a random shape
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
