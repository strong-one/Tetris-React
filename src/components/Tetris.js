import React, { useState } from "react";

// will need so there is a clean stage on new game
import { createStage, checkCollision } from "../gameHelpers"; //prop

// styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

//custom hooks

import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

// components
import Stage from "./Stage"; // stage with cells where blocks fall
import Display from "./Display"; // data from game display
import StartButton from "./StartButton"; // start button to initiate game

const Tetris = () => {
  // droptime - speed based on level speed
  const [dropTime, setDropTime] = useState(null);
  // gameover
  const [gameOver, setGameOver] = useState(false);

  // custom hooks via deconstruction
  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      // left and right movements
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // reset everyting
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    // moving one step down at a time on the y axis
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      // as dropping y value increase by 1 and y tetromino go down
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log(" GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      // need to set collided property to true when it collides
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      // 37 is code for left arrow on keyboard
      if (keyCode === 37) {
        // -1 moving to the left on x axis
        movePlayer(-1);
        // 39 is right arrow on keyboard
      } else if (keyCode === 39) {
        // 1 moving to the right on x axis
        movePlayer(1);
        // 40 is down arrow
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper
      //this is the width of the vp so keypresses and events can register without a specific smaller target
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}

          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
