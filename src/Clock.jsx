import { useEffect, useState } from "react";

export default function Clock({ city, timeZone }) {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      setTime(date.toLocaleTimeString("en-GB", { timeZone }));
    }, 1000);
  }, []);

  return (
    <div class="container">
      <div class="time">{time}</div>
      <div class="city">{city}</div>
    </div>
  );
}
