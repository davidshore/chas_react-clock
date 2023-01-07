import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Clock(props) {
    const [nowTime, setNowTime] = useState()
    useEffect(() => {
        setInterval(() => {
                const date = new Date()
                setNowTime(date.toLocaleTimeString('eu-SE',{timeZone : props.timeZoneProp }))
        }, 1000);
    }, []);

    const [showTime,setTime] = React.useState(false)
    const open = () =>{
        setTime( true)
    }
    const close = () =>{
        setTime(false)
    }
    return (<div className='clock'>
                <h2> {props.city} </h2>
                <button type='button' id='btn' onClick={open}>See Time</button>
                <button type='button' id='btn' onClick={close}>Close Time</button>
                { showTime && <div className='timeShow'><h1>{nowTime}</h1></div> }
                
            </div>);
}
