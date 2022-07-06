import { useState } from "react";
import "./App.css";

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const calculating = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }

    setCalc(calc + value);
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button className="btnNumbers" onClick={() => calculating(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const delLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const reset = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="container">
      <div className="calc">
        <div className="result">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="rows">
          <div className="AC">
            <button className='btns' onClick={() => reset()}>AC</button>
          </div>
          <div>
            <button className='btns' onClick={delLast}>C</button>
          </div>
          <div>
            <button className='btns' onClick={() => calculating("/")}>/</button>
          </div>
          <div>
            <button className='btns' onClick={() => calculating("*")}>X</button>
          </div>
          <div>
            <button className='btns' onClick={() => calculating("+")}>+</button>
          </div>
          <div>
            <button className='btns' onClick={() => calculating("-")}>-</button>
          </div>
          <div className="numbers">{createDigits()}</div>
          <div>
            <button className='btns' onClick={() => calculating(".")}>.</button>
          </div>
          <div>
            <button className='btns' onClick={() => calculating("0")}>0</button>
          </div>
          <div className="equal">
            <button className='btns'  onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
