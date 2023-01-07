import "./App.css";
import Clock from "./Clock.jsx";
function App() {
  return (
        <div className="app"> 
            <div className="clockLeft">
              <Clock     timeZoneProp = {"Europe/Stockholm"}   city={ "Stockholm"} />
              <Clock     timeZoneProp = {"America/New_York"}  city={ "New York"}  />
            </div>
            <div className="clockRight">
                <Clock     timeZoneProp= { "Asia/Tokyo" }  city={ "Tokyo"}  />
                <Clock     timeZoneProp = {"Europe/London"}  city={ "London"} />
            </div>
        </div>
  );
}

export default App;
