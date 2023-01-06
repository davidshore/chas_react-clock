import { useEffect, useState } from "react";

export default function Clock(props) {
  const [time, setTime] = useState();

  useEffect(() => {
    updateTime();
    setInterval(() => updateTime(), 1000);
  }, []);

  function updateTime() {
    const date = new Date();
    setTime(date.toLocaleTimeString("en-GB", { timeZone: props.timeZone }));
  }
  return (
    <div>
      {props.city}: {time}
    </div>
  );
}
