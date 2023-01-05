import "./App.css";
import React from "react";

import Clock from "./Clock";



function App() {
  return  <div>
<Clock city="London" timeZone="Europe/London" />
      <Clock city="Stockholm" timeZone="Europe/Stockholm" />
</div>;
}

export default App;
