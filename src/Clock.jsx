import React, {useState, useEffect} from "react";

function Clock({regionCode, timeZone, city}) {
    const [time, setTime] = useState()

    useEffect(() => {
        setInterval(() => {
            let newTime = new Date().toLocaleTimeString({regionCode}, 
            {timeZone, timestyle:"long",hourCycle:"h24"})
            setTime(newTime)
        }, 1000);}, [])    

    return (
        
        <div style={styles.container}>
        <span style={styles.city}>
        {city}
        </span>
        <span style={styles.time}>
        {time}            
        </span>
        <span style={styles.timeZone}>
        {timeZone}
        </span>        
        </div>
        
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
    },
    time: {
        fontSize: 80,
        fontWeight: 700,
        marginTop: 60,
        marginBottom: 30
    },
    city: {
        fontSize: 40,
        fontWeight: 600
    },
    timeZone: {
        fontSize: 15,
        fontWeight: 600,
        marginBottom: 50
    }
}

export default Clock
