import React from "react";

import { StyledStartButton } from "./styles/StyledStartButton";

// passing props via deconstruction
const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
