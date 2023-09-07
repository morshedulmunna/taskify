import React from "react";
import TimeCounter from "../../lib/TimeCounter";

export default function DashboardPage() {
    return (
        <>
            <div className=" px-4 py-4 mb-6 rounded text-white bg-dark400">
                <p className="capitalize font-bold">Home</p>
            </div>

            <div className="text-white flex justify-center items-center h-[70vh] flex-col">
                <h1 className="text-xl mb-4 ">
                    Dashboard Report Features Coming Soon .....
                </h1>
                <TimeCounter targetDate="2023-09-11T00:00:00" />
            </div>
        </>
    );
}
