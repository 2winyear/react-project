import React, { useState } from "react";

const CountDown = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const handleHourIncrease = () => {
    setHour(hour + 1);
  };

  const handleMinIncrease = () => {
    setMin(min + 1);
  };
  
  const handleSecIncrease = () => {
    setSec(sec + 1);
  };

  const reset = () => {
    clearInterval();
    setSec(0);
    setMin(0);
    setHour(0);
  }

  
  const run = () => {
    if (sec > 0) {
      setSec(sec - 1);
    }
  };

  const start = () => {
    setInterval(run,1000);
  }

  return (
    <div>
      <h2>{hour}:{min}:{sec}</h2>
      <button onClick={handleHourIncrease}>+1H</button>
      <button onClick={handleMinIncrease}>+1M</button>
      <button onClick={handleSecIncrease}>+1S</button>
      <button onClick={reset}>reset</button>
      <button onClick={start}>start</button>
    </div>
  )
}

export default CountDown
