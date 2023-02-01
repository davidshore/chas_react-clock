import { useEffect, useState } from "react";

export default function Clock({ city, timeZoneProp }) {
  const [time, setTime] = useState();

  useEffect(() => {

      setInterval(() => {
          const date = new Date();

          setTime(date.toLocaleTimeString("en-GB", { timeZone: timeZoneProp }));
      }, 1000);

  }, []);

  return (
  <div>
    <h2 class="city">{city}</h2>
    <h2 class="time">{time}</h2>
  </div>
  );
 }