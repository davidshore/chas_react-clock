import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Clock from "./Clock";


function App() {

  return (
    <div>
      <Clock city = "Helsingfors" timeZoneProp = "Europe/Helsinki" />
    </div>
  )
};

export default App;
