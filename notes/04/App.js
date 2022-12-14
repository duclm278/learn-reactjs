import { useState } from "react";
import "./App.css";

function Com(props) {
  const counter = props.counter;
  const setCounter = props.setCounter;

  console.log("Com render");

  return <button onClick={() => setCounter(counter + 1)}>Inc Counter</button>;
}

export default function App() {
  const [counter, setCounter] = useState(0);

  console.log("App render");
  return (
    <>
      <Com counter={counter} setCounter={setCounter} />
      <h1>Counter: {counter}</h1>
    </>
  );
}
