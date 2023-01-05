import './App.css';
import Clock from './Clock';
import { useState } from 'react';
import Button from './Button';

function App() {
  const [pause, setPause] = useState(false);
  const [btnText, setBtnText] = useState('Pause');
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('eu-SE', { timeZone: 'Europe/Stockholm' })
  );
  const [nr1, nr2] = time;
  const hours = parseInt(`${nr1}${nr2}`);

  return (
    <div className={`clock ${hours < 19 && hours > 6 ? 'day' : 'night'}`}>
      <Clock
        time={time}
        setTime={setTime}
        pause={pause}
        city='Stockholm'
        timeZone={'Europe/Stockholm'}
      />
      <Button
        handleClick={() => {
          pause
            ? (setPause(false), setBtnText('Pause'))
            : !pause && (setPause(true), setBtnText('Start'));
        }}
      >
        {btnText}
      </Button>
    </div>
  );
}

export default App;
