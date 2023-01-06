import React from "react";
import { useEffect, useState } from "react";

const Clock = ({ city, timeZone }) => {
  const [time, setTime] = useState(true);
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("en-GB", { timeZone }));
    }, 1000);
  }, []);
  return (
    <div>
      <h1>{time}</h1>
      <h2>{city}</h2>
    </div>
  );
};

export default Clock;
