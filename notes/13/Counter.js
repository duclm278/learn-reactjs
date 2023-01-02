import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
    </div>
  );
};

export default Counter;
