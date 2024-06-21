import { useEffect, useState } from 'react';

function IncrementDecrement() {

  const [count, setcount] = useState(0);

  const handleClick = (num , operation) => {
    if(operation === "increment") {
      setcount(count + num);
    } else if(operation === "decrement") {
       setcount(count - num);
    }
  }

  return <div>
    <h1>count Change here: <span className="inc-dec-count">{count}</span></h1>
    <h2>Increment By: </h2>
    <button onClick={() => handleClick(5 , "increment")}>Increment By 5</button>
    <button onClick={() => handleClick(10, "increment")}>Increment By 10</button>
    <button onClick={() => handleClick(15, "increment")}>Increment By 15</button>
    <button onClick={() => handleClick(20, "increment")}>Increment By 20</button>
    <button onClick={() => handleClick(30, "increment")}>Increment By 30</button>
    <hr />
    <h2>Decrement By:</h2>
    <button onClick={() => handleClick(5, "decrement")}>Decrement By 5</button>
    <button onClick={() => handleClick(10, "decrement")}>Decrement By 10</button>
    <button onClick={() => handleClick(15, "decrement")}>Decrement By 15</button>
    <button onClick={() => handleClick(20, "decrement")}>Decrement By 20</button>
    <button onClick={() => handleClick(30, "decrement")}>Decrement By 30</button>
  </div>
 
}

export default IncrementDecrement;