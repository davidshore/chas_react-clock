import "./App.css";
import Clock from "./Clock";

function App() {
  //använd useEffekt med tom array när du vill köra kod en gång
  //när komponenten skapas.
  // useEffekt används för att hämta api-anrop.
  // används för att starta setInterval.

  return (
    <div>
      <Clock city="London" timeZone="Europe/London" />
      <Clock city="Stockholm" timeZone="Europe/Stockholm" />
    </div>
  );
}
export default App;
