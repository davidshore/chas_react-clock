import './App.css';
import Clock from './Clock';
import { useState } from 'react';
import Button from './Button';

function App() {
  const [pause, setPause] = useState(false);
  const [btnText, setBtnText] = useState('Pause');

  return (
    <div className='clock'>
      <Clock pause={pause} city='Stockholm' timeZone='Europe/Stockholm' />
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
