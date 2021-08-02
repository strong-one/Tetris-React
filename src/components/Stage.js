import react from "react";
import Cell from "./Cell";

// props passed via deconstruction
// mapping through stage i created to get row, row is an array that holds the cell, map thorugh row to get the cell each cell will render cell component
const Stage = ({ stage }) => (
  <div>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={0} />))}
  </div>
);

export default Stage;
