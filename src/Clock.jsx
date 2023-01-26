import { useState, useEffect } from "react";
import "./App.css";

export default function Clock({ city, timeZone }) {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("en-SV", { timeZone }));
    }, 1000);
  }, []);

  return (
    <div>
      {city}: {time}
    </div>
    /*<div className="clock">
      <h1>
        {" "}
        {city}: {time}
      </h1>
    </div>*/
  );
}
