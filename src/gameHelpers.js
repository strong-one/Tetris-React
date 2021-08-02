// create stage, width and height

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// function to create stage to represent rows and columns

export const createStage = () =>
  // multidimentional array that represents grid

  Array.from(Array(STAGE_HEIGHT), () =>
    // for each row create a new array with cells and fill with values 0 being the clean cell nothing in cell, string is there is no tetris that has collided and should be wiped from stage in next render
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
