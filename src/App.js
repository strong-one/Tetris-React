import React from "react";
import Tetris from "./components/Tetris";

// when using explicit return, using parens instead of curly brackets and do not have to spcify whats being rendered with "return()", when using curly brackets must specify the return with "return()"
const App = () => (
  <div className="App">
    <Tetris />
  </div>
);

export default App;
