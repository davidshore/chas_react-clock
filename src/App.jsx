import "./App.css";
import Clock from "./Clock.jsx";
function App() {
  return (
        <div className="app"> 
            <div className="clockLeft">
              <Clock      timeZoneProp = "Europe/Stockholm" />
              <Clock     timeZoneProp = "America/New_York" />
            </div>
            <div className="clockRight">
                <Clock      timeZoneProp= "Europe/Paris" />
                <Clock       timeZoneProp = "Europe/London" />
            </div>
        </div>
  );
}

export default App;
