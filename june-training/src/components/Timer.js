import React, { useState, useEffect } from 'react';

function Timer() {
  const [timer, settimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      settimer(prevtimer => prevtimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div>
      <h1>Timer: {timer} timer</h1>
    </div>
  );
}

export default Timer;
