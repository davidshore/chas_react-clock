import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

  const [time, setTime] = useState();

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);

    };
  }, []);
  return <div>
    {date.toLocaleTimeString("jp-JA", { timeZone: "Asia/Tokyo" })}
  </div>
}
export default App;