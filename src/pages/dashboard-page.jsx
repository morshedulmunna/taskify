import {ListChecks} from "lucide-react";
import React, {useState} from "react";
import DigitalClock from "../components/DigitalClock";
import PageTittle from "../components/PageTittle";
import {getAllTasks} from "../lib/getTasks";

export default function DashboardPage() {
    const [allTask, setAllTask] = useState([]);

    getAllTasks((data) => {
        setAllTask(data);
    });

    return (
        <>
            <div className=" px-4 py-4 mb-6 rounded text-white bg-dark400">
                <PageTittle />
            </div>

            <div className="mx-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-white font-medium">
                <div className="bg-dark400 w-full p-6 flex items-center justify-center space-x-4 rounded">
                    <ListChecks size={80} />
                    <div>
                        <div>Total Task </div>
                        <div className="text-3xl font-black ">
                            {" "}
                            {allTask.length}
                        </div>
                    </div>
                </div>
                <div className="bg-dark400 w-full p-6 flex items-center justify-center space-x-4 rounded">
                    <ListChecks size={80} />
                    <div>
                        <div>Total Task </div>
                        <div className="text-3xl font-black ">
                            {" "}
                            {allTask.length}
                        </div>
                    </div>
                </div>

                {/* Time */}
                <div className=" w-full p-6 flex items-center justify-center space-x-4 rounded">
                    <DigitalClock />
                </div>
            </div>
        </>
    );
}
