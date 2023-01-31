import React, { useState, useEffect } from 'react';

function Clock({ city, timeZone }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString('default', {
        timeZone,
        hour12: false
      });
      setTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div>
      <div>{city}</div>
      <div>{time}</div>
    </div>
  );
}

export default Clock;
