export default function Clock({ city, timeZoneProp }) {
    
    const [time, setTime] = useState();

    useEffect(() => {

        setInterval(() => {
            const date = new Date();

            setTime(date.toLocaleTimeString("fi-FI", { timeZone: timeZoneProp }));
        }, 1000);
    }, []);

    return <div> {city}: {time} </div>;
}