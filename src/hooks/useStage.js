import { useState, useEffect } from "react";

import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  // will generate initial stage
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage) => {
      // first have to clear stage from previous render
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // draw shape
      // looping through shapes to see what cell the shape is occupying and know what shape it is

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          // if value is not 0 then i know that makes up shape and how i can position on the stage
          if (value !== 0) {
            // coordinates of shape on the stage
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              // calculating what to render based on merged(collided) or clear(flush stage)
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });

      // check if i collided
      if (player.collided) {
        resetPlayer();
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage];
};
