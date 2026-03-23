import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calc = (type) => {
    const a = parseFloat(num1) || 0;
    const b = parseFloat(num2) || 0;

    if (type === "add") setResult(a + b);
    if (type === "sub") setResult(a - b);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="Number 1"
        onChange={(e) => setNum1(e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Number 2"
        onChange={(e) => setNum2(e.target.value)}
      /><br /><br />

      <button onClick={() => calc("add")}>Add</button>
      <button onClick={() => calc("sub")}>Subtract</button>

      <h2>Result: {result}</h2>
    </div>
  );
}
