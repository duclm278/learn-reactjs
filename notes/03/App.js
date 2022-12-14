import { useState } from "react";
import "./App.css";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);

  function handleChangeA(e) {
    let t = parseInt(e.target.value);
    setA(t);
    setSum(t + b);
  }

  function handleChangeB(e) {
    let t = parseInt(e.target.value);
    setB(t);
    setSum(a + t);
  }

  console.log("App render");
  return (
    <>
      <input type="text" onChange={handleChangeA}></input>
      <input type="text" onChange={handleChangeB}></input>
      <h1>
        Sum {a} + {b} = {sum}
      </h1>
    </>
  );
}
