import "./App.css";
import Clock from "./Clock";

function App() {
  return (
    <div>
      <Clock city={"London"} timeZone={"Europe/London"} />
      <Clock city={"Stockholm"} timeZone={"Europe/Stockholm"} />
      <Clock city={"Sydney"} timeZone={"Australia/Sydney"} />
    </div>
  );
}

export default App;

//Använd useEffect med tom array när du vill köra kod en gång
//Används vid API anrop
//"en-GB", { timeZone: "Europe/London" }
