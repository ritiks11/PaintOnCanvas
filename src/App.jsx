import Canvas from "./components/canvas/Canvas";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";
import CustomPaint from "./CustomPaint";
import React, { useRef } from "react";
import "./App.css";

function App() {
  const [{ canvasRef, ...states }, { init, ...handleFn }] = CustomPaint();
  return (
    <div className="App">
      <Header />
      <div className="toolCanvas">
        <Toolbar {...handleFn} {...states} />
        <Canvas
          canvasRef={canvasRef}
          init={init}
          eraser={states.isEraser}
          thickness={states.thickness}
        />
      </div>
    </div>
  );
}

export default App;
