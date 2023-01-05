import { useEffect, useState } from "react";
import "./App.css";

import Clock from "./Clock";

function App() {
  // Använd useEffect med tom array när du vill köra kod en gång
  // när komponenten skapas.
  // Används för api-anrop.
  // Används för att starta setInterval


  //city används bara för att visa på skärmen
  //timeZoneProp är det som ändrar tiden på riktigt.
  return (
    <div>
      <Clock city="London" timeZoneProp="Europe/London" />
      <Clock city="Stockholm" timeZoneProp="Europe/Stockholm" />
      <Clock city="New York" timeZoneProp="America/New_York" />
      <Clock city="Istanbul" timeZoneProp="Europe/Istanbul" />
      <Clock city="Hong Kong" timeZoneProp="Asia/Hong_Kong" />
    </div>
  )
}

export default App;