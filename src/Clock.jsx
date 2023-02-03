import { useState, useEffect } from "react";

// data: {city, timeZone}
function Clock({ city, timeZone }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(function () {
      getTimeWithTimeZones();
    }, 1000);
    return function clear() {
      clearInterval(timer);
    };
  }, [city, timeZone]);

  function getTimeWithTimeZones() {
    let timeString = new Date().toLocaleTimeString();
    let hms = timeString.split(':')
    let h = parseInt(hms[0]) + parseInt(timeZone);
    if (h > 23) h = h - 24;
    let timeWithZone = `${h}:${hms[1]}:${hms[2]}`;
    setTime(timeWithZone);
  }

  return (
    <div className="clock-container">
      <h1>{city}</h1>
      <h1>{time}</h1>
    </div>
  );
}
export default Clock;
