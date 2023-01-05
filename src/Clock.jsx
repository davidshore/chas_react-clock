import { useState, useEffect } from "react";

export default function Clock({ city, timeZoneProp }) {
    const [time, setTime] = useState();

    useEffect(() => {

        setInterval(() => {
            const date = new Date();

            setTime(date.toLocaleTimeString("en-GB", { timeZone: timeZoneProp }));
        }, 1000);


    }, []);

    return <div>{city}: {time}</div>;
}