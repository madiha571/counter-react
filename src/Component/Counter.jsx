
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setcount] = useState(0);

  return (
    <div className="counter">
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => setcount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setcount(count > 0 ? count - 1 : 0)}>
        Decrease
      </button>

      <button onClick={() => setcount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
