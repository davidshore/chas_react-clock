import { useEffect, useState } from "react";

export default function Clock({ city, timeZone }) {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("en-GB", { timeZone: timeZone }));
    }, 1000);
  }, []);

  return (
    <div className="clocks">
      <p>{city}:</p>
      <p>{time}</p>
    </div>
  );
}
