import Clock from "./Clock";
import { useState } from "react";

function App() {
  const [timeZone, setTimeZone] = useState(0);
  const [city, setCity] = useState("london");
  function handleChange(event) {
    setTimeZone(event.target.value);
  }
  function handleClick() {
    let selectedCity = document.getElementById("cityInput");
    setCity(selectedCity.value);
  }
  return (
    <div>
      <div className="time-zone-container">
        <label>
          <span>select time zone: </span>
          <select value={timeZone} onChange={(event) => handleChange(event)}>
            <option value={-12}>UTC -12</option>
            <option value={-11}>UTC -11</option>
            <option value={-10}>UTC -10</option>
            <option value={-9}>UTC -9</option>
            <option value={-8}>UTC -8</option>
            <option value={-7}>UTC -7</option>
            <option value={-6}>UTC -6</option>
            <option value={-5}>UTC -5</option>
            <option value={-4}>UTC -4</option>
            <option value={-3}>UTC -3</option>
            <option value={-2}>UTC -2</option>
            <option value={-1}>UTC -1</option>
            <option value={0}>UTC +0</option>
            <option value={1}>UTC +1</option>
            <option value={2}>UTC +2</option>
            <option value={3}>UTC +3</option>
            <option value={4}>UTC +4</option>
            <option value={5}>UTC +5</option>
            <option value={6}>UTC +6</option>
            <option value={7}>UTC +7</option>
            <option value={8}>UTC +8</option>
            <option value={9}>UTC +9</option>
            <option value={10}>UTC +10</option>
            <option value={11}>UTC +11</option>
            <option value={12}>UTC +12</option>
          </select>
        </label>
      </div>

      <div className="city-container">
        <span>select a city </span>
        <input type="text" id="cityInput" name="city" />
        <button onClick={handleClick}>submit</button>
      </div>

      <Clock city={city} timeZone={timeZone} />
    </div>
  );
}

export default App;
