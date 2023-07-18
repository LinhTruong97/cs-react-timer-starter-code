import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [splitTimes, setSplitTimes] = useState([])

  // track the timer's start or pause state.
  const isStart = useRef(true);
  // hold a reference to button Start (disable when start)
  const active = useRef();
  //store the interval ID returned by the setInterval function
  const refInterval = useRef(0);

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;

    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);

      }
    }, 1000);
  };

  const stopTimer = () => {
    isStart.current = false
    clearInterval(refInterval.current)
    active.current.disabled = false;
  };
  const splitTimer = () => {
    const currentSplitTime = time - splitTimes.reduce((previous, current) => previous + current, 0);
    setSplitTimes((prevSplitTimes) => [...prevSplitTimes, currentSplitTime]);
  };
  const resetTimer = () => {
    setTime(0);
    setSplitTimes([])
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, splitTimer, active, splitTimes };
};
export default useTimer;
