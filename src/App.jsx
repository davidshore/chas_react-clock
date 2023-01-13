//import "./App.css";
import styles from "./App.module.css";
import Clock from "./Clock";

function App() {
  // Använd useEffect med tom array när du vill köra kod en gång
  // när komponenten skapas.
  // Används för api-anrop.
  // Används för att starta setInterval

  return (
    <>
      <div className={styles.container}>

        <h1>Local times around the world!</h1>
        <div>
          <Clock city="Stockholm" timeZone="Europe/Stockholm" />
        </div>
        <div className={styles.clockMargin}>
          <Clock city="London" timeZone={"Europe/London"} /> 
        </div>
        <div>
          <Clock city="New York" timeZone={"America/New_York"} />
        </div>

      </div>   
    </>  
  );
}

export default App;
