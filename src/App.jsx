import "./App.css";
import Clock from "./Clock";

function App() {
    return (
        <div>
            <Clock city={"Stockholm"} timeZone="Europe/Stockholm" />
            <Clock city={"New York"} timeZone="America/New_York" />
            <Clock city={"Tokyo"} timeZone="Asia/Tokyo" />
            <Clock city={"Canberra"} timeZone="Australia/Canberra" />
        </div>
    );
}

export default App;
