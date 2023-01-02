import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import { CounterContext } from "./CounterContext";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <div>Counter: {counter}</div>
      <Counter />
    </CounterContext.Provider>
  );
};

export default App;
