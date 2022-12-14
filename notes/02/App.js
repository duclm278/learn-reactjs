import "./App.css";

const Com1 = () => {
  const handleClick = () => {
    alert("The 1st component's button!");
  };

  return (
    <div>
      <h2>This is the 1st component.</h2>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

function Com2() {
  return <h2>This is the 2nd component.</h2>;
}

function App() {
  return (
    <div>
      <h1>hello, world</h1>
      <Com1 />
      <Com2 />
    </div>
  );
}

export default App;
