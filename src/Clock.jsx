import { useEffect, useState} from "react";

export default function Clock({ city, timeZone }) {

    const [time, setTime] = useState();
  
    useEffect(() => {
      setInterval(() => {
      const date = new Date();
  
      setTime(date.toLocaleTimeString("en-GB", {timeZone: timeZone}, 1000 )
      );
      });
  
  
    }, []);
  
  
    return (
        <div>
          <h2 class="city">{city}</h2>
          <h2 class="time">{time}</h2>
          
          
        </div>
    );
}

