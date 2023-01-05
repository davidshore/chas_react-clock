import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Clock";


function App() {

  //använd useeffect med tom array när du vill köra kod en gång
  //när komponenten skapas.
  //Används vid API- anrop tex. 
  //Används för att starta setInterval.
  



  return ( 
  <div>

    <Clock city="Stockholm" timeZone= "Europe/Stockholm"  />
    <Clock city="London" timeZone= "Europe/London"  />
    
  </div>
  );
}


export default App;
