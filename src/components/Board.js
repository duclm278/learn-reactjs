import { useEffect, useState } from "react";
import { MAX_HEIGHT_RATIO, MAX_WIDTH_RATIO } from "../Config";
import Cell from "./Cell";

const Board = ({ cells, containerRef }) => {
  const numRows = cells.length;
  const numCols = cells[0].length;
  const [gridCss, setGridCss] = useState({});
  const [cellCss, setCellCss] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const boardMaxW = MAX_WIDTH_RATIO * containerRef.current.offsetWidth;
      const boardMaxH = MAX_HEIGHT_RATIO * window.innerHeight;
      setGridCss({
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 1fr)`,
      });
      setCellCss(() => {
        return {
          display: "flex",
          width: Math.min(boardMaxW / numCols, boardMaxH / numRows),
          aspectRatio: "1 / 1",
        };
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numCols, numRows, containerRef]);

  return (
    <div>
      <div className="board" style={gridCss}>
        {cells.flat().map((cell, index) => (
          <Cell key={index} value={cell} style={cellCss} />
        ))}
      </div>
    </div>
  );
};

export default Board;
