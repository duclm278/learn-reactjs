import { useEffect, useState } from "react";
import "./App.css";

function Com() {
  console.log("Com render");
  useEffect(() => {
    console.log("Com effect");
  }, []);
  return <></>;
}

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("App effect executed for counter:", counter);
    if (counter < 5) {
      console.log("=> The upcoming counter:", counter + 1);
      setCounter(counter + 1);
    }

    console.log("App cleanu prepared for counter:", counter);
    return () => {
      console.log("App cleanu executed for counter:", counter);
    };
  }, [counter]);

  console.log("App render w/counter:", counter);
  return (
    <>
      Counter: {counter}
      <Com />
    </>
  );
}
