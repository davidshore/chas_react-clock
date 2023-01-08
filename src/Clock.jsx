import React, {useState, useEffect} from "react";

function Clock({timeZone, city}) {
    const [time, setTime] = useState()

    useEffect(() => {
        setInterval(() => {
            let newTime = new Date().toLocaleTimeString("ja-JP", 
            {timeZone: "Asia/Tokyo", timestyle:'long',hourCycle:'h24'})
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
        fontSize: 120,
        fontWeight: 700,
        marginTop: 90,
        marginBottom: 90
    },
    city: {
        fontSize: 50,
    },
    timeZone: {
        fontSize: 25
    }
}

export default Clock
