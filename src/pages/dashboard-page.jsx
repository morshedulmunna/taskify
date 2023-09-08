import {Calendar, ListChecks} from "lucide-react";
import React, {useState} from "react";
import DigitalClock from "../components/DigitalClock";
import PageTittle from "../components/PageTittle";
import {getAllTasks} from "../lib/getTasks";

export default function DashboardPage() {
    const [allTask, setAllTask] = useState([]);

    getAllTasks((data) => {
        setAllTask(data);
    });

    const date = new Date().toDateString();
    return (
        <>
            <div className=" px-4 py-4 mb-6 rounded text-white bg-dark400">
                <PageTittle />
            </div>

            <div className=" text-white mx-2 mb-6 p-4 rounded ">
                <h1 className="text-5xl font-bold">
                    Well come to Our Taskify!
                </h1>
                <p className="mt-4 text-sm leading-6">
                    Taskify is A Task Management System with Team is a powerful
                    digital tool designed to streamline and enhance teamwork and
                    productivity within organizations. This system allows teams
                    to efficiently assign, track, and complete tasks and
                    projects collaboratively. It provides a centralized platform
                    where team members can create, delegate, and monitor tasks,
                    ensuring clear communication and accountability. With
                    features like real-time updates, task prioritization, and
                    progress tracking, this system promotes efficient project
                    management, improved workflow coordination, and better
                    overall team performance. Whether you're working on a small
                    project or managing complex, long-term initiatives, a Task
                    Management System with Team is your go-to solution for
                    achieving your goals efficiently and effectively.
                </p>
            </div>

            <div className="mx-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-white font-medium">
                <div className="bg-dark400 w-full p-6 flex items-center justify-center space-x-4 rounded">
                    <ListChecks size={80} />
                    <div>
                        <div>Total Task </div>
                        <div className="text-3xl font-black ">
                            {allTask.length}
                        </div>
                    </div>
                </div>
                <div className="bg-dark400 w-full p-6 flex items-center justify-center space-x-4 rounded">
                    <Calendar size={80} />
                    <div>
                        <div>Today Date</div>
                        <div className="text-3xl font-black ">{date}</div>
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
