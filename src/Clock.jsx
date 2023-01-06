import { useState, useEffect } from "react";

export default function Clock({ city, timeZone }) {
    const [time, setTime] = useState(
        new Date().toLocaleTimeString("se-SE", { timeZone: timeZone })
    );

    useEffect(() => {
        setInterval(() => {
            setTime(
                new Date().toLocaleTimeString("se-SE", {
                    timeZone: timeZone,
                })
            );
        }, 1000);
    }, []);

    return (
        <div>
            {city} {time}
        </div>
    );
}
