import { useState } from "react";

export default function App() {
  const [left, setLeft] = useState(true);
  const theme = {
    backgroundColor: "lightgreen",
    display: "flex",
    justifyContent: left ? "flex-start" : "flex-end",
  };

  return (
    <div>
      <div style={theme}>
        <div>
          <h3>Login</h3>
        </div>
      </div>
      <button onClick={() => setLeft(!left)}>Change position</button>
    </div>
  );
}
