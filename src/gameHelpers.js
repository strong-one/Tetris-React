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

// collision control

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  // loop through shapes
  for (let y = 0; y < player.tetromino.length; y + 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1) {
      // check that i am on an actual cell and is 0
      if (player.tetromino[y][x] !== 0) {
        if (
          // check that movement is inside game area (y)
          // shouldnt go through bottom of play area
          !stage[y + player.pos.y + moveY] ||
          // check that shape isint going outside of game area width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // check that cell i am moving to isint set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
