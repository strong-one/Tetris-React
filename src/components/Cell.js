import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMNINOS } from "../tetrominos";

// passing props via deconstruction
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMNINOS[type].color} />
);

export default Cell;
