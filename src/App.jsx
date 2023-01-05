import { useEffect, useState } from "react";
import "./App.css";

function Clock({ city, timeZone }) {
  let date = new Date().toLocaleTimeString("sv-SE", { timeZone: timeZone })
  const [time, setTime] = useState(date)

  useEffect(() => {
    setInterval(() => {
      date = new Date().toLocaleTimeString("sv-SE", { timeZone: timeZone })
      setTime(date)
    }, 1000);
  }, [])

  return <div>{city + ': '}{time}</div>;
}

function App() {
  return <Clock city="Stockholm" timeZone="Europe/Stockholm"></Clock>
}

export default App;
