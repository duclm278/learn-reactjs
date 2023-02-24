import { useRef } from "react";

const Input = ({ queue, setQueue }) => {
  const textRef = useRef(null);

  const handleClick = () => {
    const newMoves = textRef.current.value.split("\n");
    setQueue([...queue, ...newMoves]);
    textRef.current.value = "";
    textRef.current.focus();
  };

  console.log("Input render");
  return (
    <div className="input">
      <textarea cols={20} placeholder="Move Right" autoFocus ref={textRef} />
      <button type="button" onClick={handleClick}>
        Run
      </button>
    </div>
  );
};

export default Input;
