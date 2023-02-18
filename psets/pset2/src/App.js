import { useState } from "react";
import "./App.css";
import data from "./data.json";

export default function App() {
  const [numCols] = useState(4);
  const [numImgs] = useState(48);
  const [imgList] = useState(data.slice(0, numImgs));
  const customGrid = {
    display: "grid",
    gap: "0.5rem",
    gridTemplateColumns: `repeat(${numCols}, 1fr)`,
  };

  return (
    <div className="main-container">
      <h1>Photo Gallery</h1>
      <div style={customGrid}>
        {imgList.map((image) => (
          <img
            key={image.name}
            src={"/images/" + image.name}
            alt={image.name}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
