import React, { useState } from "react";

function IncrementDecrement() {
  const [count, setCount] = useState(0);

  const incrementCount = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <div>
      <button onClick={() => incrementCount(1)}>Increment by 1</button>
      <button onClick={() => incrementCount(5)}>Increment by 5</button>
      <button onClick={() => incrementCount(10)}>Increment by 10</button>
      <button onClick={() => incrementCount(15)}>Increment by 15</button>
      <button onClick={() => incrementCount(20)}>Increment by 20</button>
      </div>
      <div>
      <button onClick={() => incrementCount(-1)}>Decrement by 1</button>
      <button onClick={() => incrementCount(-5)}>Decrement by 5</button>
      <button onClick={() => incrementCount(-10)}>Decrement by 10</button>
      <button onClick={() => incrementCount(-15)}>Decrement by 15</button>
      <button onClick={() => incrementCount(-20)}>Decrement by 20</button>
      </div>
      
    </div>
  );
}

export default IncrementDecrement;
