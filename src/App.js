
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";

function App() {
  const { time, startTimer, stopTimer, resetTimer, splitTimer, active, splitTimes } = useTimer(0);

  return (
    <div className="App container">
      <h1>Stop Watch</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button
            className="button"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={splitTimer}>
            Split
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
        <div className="split__wrapper">
          <h3>Split History</h3>
          <div className="split__display">
            {splitTimes.map((splitTimes, index) => (
              <p key={index}>Lap {index + 1} - {formatTime(splitTimes)}</p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
