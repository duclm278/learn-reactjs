import { useRef, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Input from "./components/Input";
import data from "./data.json";

const App = () => {
  const containerRef = useRef(null);
  const [cells, setCells] = useState(data);
  return (
    <div className="app">
      <h1 className="title">Maze Simulation</h1>
      <div className="content" ref={containerRef}>
        <Board cells={cells} containerRef={containerRef} />
        <Input cells={cells} setCells={setCells} />
      </div>
    </div>
  );
};

export default App;
