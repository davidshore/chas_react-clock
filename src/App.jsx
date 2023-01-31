import "./App.css";
import Clock from "./clock";

function App() {
  return (
    <div>
      <Clock regionCode="ja-JP" timeZone={"Asia/Tokyo"} city="Tokyo"/>
      <Clock regionCode="sv-SE" timeZone={"Europe/Stockholm"} city="Stockholm"/>
      <Clock regionCode="en-US" timeZone={"America/New_York"} city="New York"/>
    </div>  
  );
}


export default App;
