import { useRef } from "react";
import {
  FLOOR_SYM,
  GOAL_SYM,
  MARIO_ON_GOAL_SYM,
  MARIO_SYM,
  WALL_SYM,
} from "../Config";

function findMario(cells) {
  for (let i = 0; i < cells.length; i++)
    for (let j = 0; j < cells[i].length; j++)
      if (cells[i][j] === MARIO_SYM || cells[i][j] === MARIO_ON_GOAL_SYM)
        return { row: i, col: j };
}

const Input = ({ cells, setCells }) => {
  const textRef = useRef(null);

  const handleClick = () => {
    let currCells = [...cells];
    let currMario = findMario(currCells);
    const moves = textRef.current.value.split("\n");
    for (const move of moves) {
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
          continue;
      }

      let oldCell = currCells[currMario.row][currMario.col];
      let newCell = currCells?.[nextMario.row]?.[nextMario.col];
      if (!!!newCell || newCell === WALL_SYM) {
        continue;
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

      setCells(currCells);
      currMario = { ...nextMario };
    }

    textRef.current.value = "";
    textRef.current.focus();
  };

  return (
    <div className="input">
      <textarea cols={20} placeholder="Move Right" autoFocus ref={textRef} />
      <button type="button" onClick={handleClick}>
        Run
      </button>
    </div>
  );
};

export default Input;
