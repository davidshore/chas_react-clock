/*import { useState, useEffect } from "react";*/
import "./App.css";
//import Clock from "./clock";

import Clock from "./Clock";

function App() {
  // Används useeffect med tom array när man vill köra kod en gång
  // när komponenten skapas
  // Används för api-anrop.
  // Används för att starta setInterval

  /* const [time, setTime] = useState("");

  useEffect(() => {
    //const date = new Date();

    const timer = window.setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("sv-SE", { timeZone: "Europe/Stockholm" })
      );
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);*/

  //return <div> {time}</div>;
  return (
    /* <div className="clock">
      <h1>{time}</h1>
    </div>*/
    <div className="Container">
      <Clock city="Stockholm" timeZone={"Europe/Stockholm"} />
    </div>
  );
}

export default App;
