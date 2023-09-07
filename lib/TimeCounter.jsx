import {useEffect, useState} from "react";

const TimeCounter = ({targetDate}) => {
    const [timeLeft, setTimeLeft] = useState();

    useEffect(() => {
        const intervalId = setInterval(updateTimeLeft, 1000);
        updateTimeLeft(intervalId);

        return () => clearInterval(intervalId);
    }, []);

    const updateTimeLeft = (intervalId) => {
        const now = new Date().getTime();
        const targetTime = new Date(targetDate).getTime();
        const timeDifference = targetTime - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setTimeLeft({days, hours, minutes, seconds});
        } else {
            // Countdown reached the target date, stop the interval
            clearInterval(intervalId);
        }
    };

    return (
        <div className="flex space-x-2">
            <div className=" border w-24 flex flex-col justify-center items-center text-blue-500 p-2 rounded-lg">
                <div className="text-3xl  font-bold">
                    {timeLeft?.days || "0"}
                </div>
                <div className="text-sm">Days</div>
            </div>
            <div className=" border w-24 flex flex-col justify-center items-center text-blue-500 p-2 rounded-lg">
                <div className="text-3xl font-bold">
                    {timeLeft?.hours || "0"}
                </div>
                <div className="text-sm">Hours</div>
            </div>
            <div className=" border w-24 flex flex-col justify-center items-center text-blue-500 p-2 rounded-lg">
                <div className="text-3xl font-bold">
                    {timeLeft?.minutes || "0"}
                </div>
                <div className="text-sm">Minutes</div>
            </div>
            <div className=" border w-24 flex flex-col justify-center items-center text-blue-500 p-2 rounded-lg">
                <div className="text-3xl font-bold">
                    {timeLeft?.seconds || "0"}
                </div>
                <div className="text-sm">Seconds</div>
            </div>
        </div>
    );
};

export default TimeCounter;
