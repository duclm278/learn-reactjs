const Com = () => {
  function handleClick() {
    const value = localStorage.getItem("counter");
    alert(`counter: ${value}`);
  }

  return (
    <div>
      <button onClick={handleClick}>View</button>
    </div>
  );
};

export default Com;
