import { useState } from "react";
import "./App.css";
function App() {
  const [val, setVal] = useState(50);
  const [val2, setVal2] = useState((100 - Number(val)) / 2);
  const [val3, setVal3] = useState(100 - (Number(val) + Number(val2)));
  const handleval1 = (e) => {
    if (true) {
      setVal(e.target.value);
      setVal2(Math.round((100 - Number(val)) / 2));
      setVal3(100 - (Number(val) + Number(val2)));
    }
  };
  const handleval2 = (e) => {
    if (true) {
      setVal2(e.target.value);
      setVal(Math.round((100 - Number(val2)) / 2));
      setVal3(99 - (Number(val) + Number(val2)));
    }
  };
  const handleval3 = (e) => {
    if (true) {
      setVal3(e.target.value);
      setVal(100 - (Number(val3) + Number(val2)));
      setVal2(Math.round((99 - Number(val3)) / 2));
    }
  };

  return (
    <div className="App">
      <header>
        <h1> Progress App </h1>
        <input
          type="range"
          min="0"
          max="100"
          value={val}
          onChange={(e) => handleval1(e)}
        />
        {val} <br />
        <input
          type="range"
          min="0"
          max="100"
          value={val2}
          onChange={(e) => handleval2(e)}
        />
        {val2} <br />
        <input
          type="range"
          min="0"
          max="100"
          value={val3}
          onChange={(e) => handleval3(e)}
        />
        {val3} <br />
        Total = {Number(val) + Number(val2) + Number(val3)}
      </header>
    </div>
  );
}

export default App;
