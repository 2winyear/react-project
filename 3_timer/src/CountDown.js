import React, { useState, useRef, useEffect} from "react";

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
    clearInterval(timerId);
    setSec(0);
    setMin(0);
    setHour(0);
  }

  const timerId = useRef(null);

  const start = () => {
    timerId.current = setInterval(
      () => setSec((sec) => sec - 1),
      1000
    );
    console.log(timerId.current);
    console.log(sec);
  };

  const stop = () => {
    clearInterval(timerId.current);
  }

  useEffect(() => {
    if (hour <= 0) {
      if (min <= 0) {
        if (sec <= 0) {
          clearInterval(timerId.current);
        }
      }
    }
  }, [sec, min, hour]);

  return (
    <div>
      <h2>{hour}:{min}:{sec}</h2>
      <button onClick={handleHourIncrease}>+1H</button>
      <button onClick={handleMinIncrease}>+1M</button>
      <button onClick={handleSecIncrease}>+1S</button>
      <button onClick={reset}>reset</button>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
};

export default CountDown;