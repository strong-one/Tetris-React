import React, { useState } from "react";

// will need so there is a clean stage on new game
import { createStage } from "../gameHelpers";

// components
import Stage from "./Stage"; // stage with cells where blocks fall
import Display from "./Display"; // data from game display
import StartButton from "./StartButton"; // start button to initiate game
// import { createStage } from "../gameHelpers"; // prop

// styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

//custom hooks

import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

// custom hooks via deconstruction
// const [player] = usePlayer();
// const [stage, setStage] = useStage(player);

const Tetris = () => {
  // custom hooks via deconstruction
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  // droptime - speed based on level speed
  const [dropTime, setDropTime] = useState(null);
  // gameover
  const [gameOver, setGameOver] = useState(false);

  console.log("re-render");

  const movePlayer = (dir) => {};

  const startGame = () => {};

  const drop = () => {};

  const dropPlayer = () => {};

  const move = ({ keyCode }) => {};

  return (
    <StyledTetrisWrapper
      //this is the width of the vp so keypresses and events can register without a specific smaller target
      role="button"
      tabIndex="0"
      onKeyDown={(event) => move(event)}
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
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
