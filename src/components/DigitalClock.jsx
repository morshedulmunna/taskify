import {Clock} from "lucide-react";
import React, {useEffect, useState} from "react";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (date) => {
        let hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        const am_pm = hours >= '12' ? 'PM' : 'AM'
        hours %= 12
        hours = hours ? hours : '12'
        return `${hours} : ${minutes} : ${seconds} ${am_pm}`;
    };

    return (
        <div className="flex  items-center space-x-2">
            <Clock size={70} />
            <div>
                <h1 className="text-3xl">Digital Clock</h1>
                <div className="text-3xl mt-2">{formatTime(time)}</div>
            </div>
        </div>
    );
};

export default DigitalClock;
