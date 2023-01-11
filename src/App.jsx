import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Clock from "./clock";


function App() {


  return (
    <div>
      <Clock city = "Piteå" timeZoneProp = "Europe/Piteå" />
      
    </div>
  )
};

export default App;
