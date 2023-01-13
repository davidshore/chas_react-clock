import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

export default function Clock({ city, timeZone }) {
  
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("en-GB", { timeZone }));
    }, 1000);
  }, []);

  return (
    <div>
      <div className={styles.title}>{city} </div>
      <div className={styles.time}>
        {time}
      </div>
    </div>
  );
}
