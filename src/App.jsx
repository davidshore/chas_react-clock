import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Clock";

let timezone = "en-GB";
let city = "Asia/Bangkok";

function App() {
  return <Clock timezone={timezone} city={city} />;
}

export default App;
