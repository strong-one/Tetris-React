import React from "react";

import { StyledDisplay } from "./styles/StyledDisplay";

// passing 2 props via deconstriction
const Display = ({ gameOver, text }) => (
  // will render prop {text}
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
