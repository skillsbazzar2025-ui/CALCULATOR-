import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (type) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (type === "add") setResult(a + b);
    if (type === "sub") setResult(a - b);
    if (type === "mul") setResult(a * b);
    if (type === "div") setResult(b !== 0 ? a / b : "Error");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      /><br /><br />

      <button onClick={() => calculate("add")}>Add</button>
      <button onClick={() => calculate("sub")}>Subtract</button>
      <button onClick={() => calculate("mul")}>Multiply</button>
      <button onClick={() => calculate("div")}>Divide</button>

      <h2>Result: {result}</h2>
    </div>
  );
}
