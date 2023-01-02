import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
    localStorage.setItem("counter", counter + 1);
  }

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={handleClick}>Inc</button>
    </div>
  );
};

export default Counter;
