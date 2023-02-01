import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Clock"

function App() {
  return ( 
  <div>
    <Clock city="Stockholm" timeZone= "Europe/Stockholm"  />
    <Clock city="London" timeZone= "Europe/London"  />
    <Clock city="New York" timeZoneProp="America/New_York" />
  </div>
  );
}

export default App;
