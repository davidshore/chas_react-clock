/*import { useState, useEffect } from "react";*/
import "./App.css";
//import Clock from "./clock";

import Clock from "./Clock";

function App() {
  // Används useeffect med tom array när man vill köra kod en gång
  // när komponenten skapas
  // Används för api-anrop.
  // Används för att starta setInterval

  //return <div> {time}</div>;
  return (
    <div className="Container">
      <Clock city="Stockholm" timeZone={"Europe/Stockholm"} />
    </div>
  );
}

export default App;
