import React from "react";

// components
import Stage from "./Stage"; // stage with cells where blocks fall
import Display from "./Display"; // data from game display
import StartButton from "./StartButton"; // start button to initiate game
import { createStage } from "../gameHelpers"; // prop
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
