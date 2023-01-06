import { useEffect, useState } from "react";
import "./App.css";

function Clock(props) {
  let onlyCityName = props.city
    .substring(props.city.indexOf("/"))
    .replace("/", "")
    .replace("_", " ");

  const [time, setTime] = useState();
  const [isTicking, setIsTicking] = useState(true);
  const [btnValue, setBtnValue] = useState();
  const [isAM, setIsAM] = useState(null);
  const [lightColor, setLightColor] = useState();

  let interval;
  useEffect(() => {
    if (isTicking) {
      setBtnValue("OFF");
      setLightColor("White");
      interval = setInterval(() => {
        const date = new Date();
        let currentTime = date.toLocaleTimeString(`${props.timezone}`, {
          timeZone: `${props.city}`,
          timeStyle: "medium",
        });

        const hours = currentTime.substring(0, 2);
        if (hours >= 0 && hours <= 12) {
          setIsAM(true);
        } else {
          setIsAM(false);
        }

        setTime(currentTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTicking]);

  const stopTime = () => {
    setBtnValue("ON");
    setIsTicking(!isTicking);
    setLightColor(`rgb(68, 65, 65)`);
  };

  const colors = [
    "red",
    "green",
    "blue",
    "purple",
    "pink",
    "orange",
    "yellow",
    "violet",
    "white",
    "coral",
    "lightcyan",
    "lightgreen",
    "lightblue",
    "grey",
    "brown",
  ];

  const mappedColors = colors.map((color) => {
    function changeColor() {
      return setLightColor(color);
    }
    return (
      <button
        key={color}
        onClick={changeColor}
        style={{ backgroundColor: color }}
      ></button>
    );
  });

  return (
    <div className="container">
      <div className="btnContainer">
        <div className="topBtns">
          <button className="onOffBtn" onClick={stopTime}>
            {btnValue}
          </button>
        </div>
        <div className="lowerBtns">{mappedColors}</div>
      </div>

      <div
        className="clockContainer"
        style={{ boxShadow: `4px -10px 80px 21px ${lightColor}` }}
      >
        <div className="timeStampContainer">
          <div className="left">
            <h1 className="timestamp">{time}</h1>
            <div className="cityContainer">
              <h2 className="cityName">{onlyCityName}</h2>
            </div>
          </div>
          <div className="right">
            <i className={`fa-solid fa-sun ${isAM ? "active" : ""}`}></i>
            <i className={`fa-solid fa-moon ${!isAM ? "active" : ""}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
