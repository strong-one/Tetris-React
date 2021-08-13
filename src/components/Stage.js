import React from "react";
import Cell from "./Cell";
import { StyledStage } from "./styles/StyledStage";

// props passed via deconstruction
// mapping through stage i created to get row, row is an array that holds the cell, map thorugh row to get the cell each cell will render cell component
const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={0} />))}
  </StyledStage>
);

export default Stage;
