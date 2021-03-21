import React, { useEffect, useState } from 'react';

const Timer = () => {
  const STATUS = {
    PLAY: 'play',
    STOP: 'stop',
  };
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(STATUS.STOP);

  const playTimer = () => {
    if (currentStatus === STATUS.PLAY) {
      seconds + 1 === 60 && setMinutes(minutes + 1);
      setSeconds((seconds + 1) % 60);
    }
  };

  useEffect(() => {
    if (currentStatus === STATUS.PLAY) {
      const interval = setInterval(playTimer, 1000);
      return () => clearInterval(interval);
    }
  }, [currentStatus, seconds, minutes]);

  const onPlay = () => setCurrentStatus(STATUS.PLAY);
  const onStop = () => setCurrentStatus(STATUS.STOP);
  const onReset = () => {
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="time">
      <div>{`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</div>
      <button onClick={onPlay}>Play</button>
      <button onClick={onStop}>Pause</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
export default Timer;
