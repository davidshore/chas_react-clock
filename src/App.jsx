import "./App.css";
import Clock from "./Clock.jsx";
function App() {
  return (
        <div className="app"> 
            <Clock      timeZoneProp = "Europe/Stockholm" />
            <Clock     timeZoneProp = "America/New_York" />
            <Clock      timeZoneProp= "Europe/Paris" />
            <Clock       timeZoneProp = "Europe/London" />
        </div>
  );
}

export default App;
