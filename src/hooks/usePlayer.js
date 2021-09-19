import { useState } from "react";
import { randomTetromino } from "../tetrominos";

export const usePlayer = () => {
  // create state, with useState hook imported, will return an array with 2 items

  // destructured
  cosnt[(player, setPlayer)] = useState({
    // property - position for player
    pos: { x: 0, y: 0 },
    // one shape i createed to always keep in state
    tetromino: randomTetromino().shape,
    collided: false,
  });

  return [player];

  // Longhand version for above code block
  //   const playerState = useState();
  //   const player = playerState[0]
  //   const setPlayer = playerState[1]
};
