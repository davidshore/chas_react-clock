import { useEffect, useState } from 'react';

function Clock({ time, setTime, pause, city, timeZone }) {
  const [intervalId, setIntervalId] = useState('');

  useEffect(() => {
    if (pause) {
      clearInterval(intervalId);
    } else {
      setIntervalId(
        setInterval(() => {
          setTime(
            new Date().toLocaleTimeString('eu-SE', { timeZone: timeZone })
          );
        }, 1000)
      );
    }
  }, [pause]);

  return (
    <div>
      <h2>{city}</h2>
      <h1 className='time'>{time}</h1>
    </div>
  );
}

export default Clock;
