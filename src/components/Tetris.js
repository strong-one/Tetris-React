import react from "react";

// components
import Stage from "./Stage"; // stage with cells where blocks fall
import Display from "./Display"; // data from game display
import StartButton from "./StartButton"; // start button to initiate game
import { createStage } from "../gameHelpers"; // prop

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default Tetris;
