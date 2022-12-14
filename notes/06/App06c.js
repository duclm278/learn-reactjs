import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return <>window.width = {width}</>;
}
