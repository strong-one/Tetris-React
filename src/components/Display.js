import react from "react";

// passing 2 props via deconstriction
const Display = ({ gameOver, text }) => (
  // will render prop {text}
  <div>{text}</div>
);

export default Display;
