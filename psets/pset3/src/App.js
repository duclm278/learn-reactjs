import { useEffect, useRef, useState } from "react";
import {
  FLOOR_SYM,
  GOAL_SYM,
  MARIO_ON_GOAL_SYM,
  MARIO_SYM,
  WALL_SYM,
} from "./Config";
import "./App.css";
import Board from "./components/Board";
import Input from "./components/Input";
import data from "./data.json";

function findMario(cells) {
  for (let i = 0; i < cells.length; i++)
    for (let j = 0; j < cells[i].length; j++)
      if (cells[i][j] === MARIO_SYM || cells[i][j] === MARIO_ON_GOAL_SYM)
        return { row: i, col: j };
}

const App = () => {
  const containerRef = useRef(null);

  // State of board
  const [cells, setCells] = useState(data);

  // Store queue of moves
  const [queue, setQueue] = useState([]);

  // Dequeue and execute moves
  useEffect(() => {
    if (queue.length === 0) return;
    const move = queue.shift();
    let currCells = [...cells];
    let currMario = findMario(currCells);
    let nextMario = { ...currMario };
    switch (move.toLowerCase().trim()) {
      case "move up":
        nextMario.row--;
        break;
      case "move down":
        nextMario.row++;
        break;
      case "move left":
        nextMario.col--;
        break;
      case "move right":
        nextMario.col++;
        break;
      default:
        return;
    }

    let oldCell = currCells[currMario.row][currMario.col];
    let newCell = currCells?.[nextMario.row]?.[nextMario.col];
    if (!!!newCell || newCell === WALL_SYM) {
      setQueue([...queue]);
      return;
    }

    if (newCell === GOAL_SYM) {
      // Move to goal
      currCells[nextMario.row][nextMario.col] = MARIO_ON_GOAL_SYM;
      currCells[currMario.row][currMario.col] = FLOOR_SYM;
    } else if (oldCell === MARIO_ON_GOAL_SYM) {
      // Move out of goal
      currCells[nextMario.row][nextMario.col] = MARIO_SYM;
      currCells[currMario.row][currMario.col] = GOAL_SYM;
    } else {
      // Move to floor
      currCells[nextMario.row][nextMario.col] = MARIO_SYM;
      currCells[currMario.row][currMario.col] = FLOOR_SYM;
    }

    // Delay to see animation
    setTimeout(() => {
      setQueue([...queue]);
      setCells(currCells);
    }, 500);
  }, [cells, queue]);

  console.log("App render");
  return (
    <div className="app">
      <h1 className="title">Maze Simulation</h1>
      <div className="content" ref={containerRef}>
        <Board cells={cells} containerRef={containerRef} />
        <Input queue={queue} setQueue={setQueue} />
      </div>
    </div>
  );
};

export default App;
