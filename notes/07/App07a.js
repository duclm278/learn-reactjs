import { useState } from "react";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);

  function handleChangeA(e) {
    setA(parseInt(e.target.value));
  }

  function handleChangeB(e) {
    setB(parseInt(e.target.value));
  }

  function handleClick() {
    const body = {
      a: a,
      b: b,
    };
    fetch("http://localhost:8000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      });
  }

  return (
    <>
      <input type="text" onChange={handleChangeA}></input>
      <input type="text" onChange={handleChangeB}></input>
      <button onClick={handleClick}>Process</button>
      result = {result ? result.resultSum : ""}
    </>
  );
}
