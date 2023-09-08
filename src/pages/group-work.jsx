import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CreateTask from "../components/CreateTask";
import PageTittle from "../components/PageTittle";
import Task from "../components/Task";
import {filterData} from "../lib/filterDataShow";
import {getAllTasks} from "../lib/getTasks";

export default function GroupWork() {
    const [isOpen, setIsOpen] = useState(false);

    let {groupId} = useParams();
    const [allTask, setAllTask] = useState([]);
    const [newTask, setNewTask] = useState([]);
    const [processing, setProcessing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [filter, setFilter] = useState("");

    if (groupId) {
        localStorage.setItem("groupId", groupId);
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    };

    useEffect(() => {
        getAllTasks((data) => {
            const groupData = data.filter((item) => item.group_Id === groupId);
            const newTasks = filterData(groupData, "new task", filter);
            const processingTasks = filterData(groupData, "processing", filter);
            const completedTasks = filterData(groupData, "completed", filter);

            setNewTask(newTasks);
            setProcessing(processingTasks);
            setCompleted(completedTasks);
        });
    }, [isOpen, filter]);

    if (allTask) {
        allTask;
    }

    return (
        <>
            <div className=" px-4 py-4 mb-6 rounded text-white bg-dark400 ">
                <PageTittle />
            </div>

            <div className="m-4 ">
                <CreateTask isOpen={isOpen} setIsOpen={setIsOpen} />

                {/* Task Filter */}
                <div className="text-purple-500 ml-4">
                    <h1 className="mt-2 text-xl font-bold">Filter Task</h1>
                    <select
                        className="border py-2 px-2 rounded w-[150px] mt-2 bg-transparent bg-white font-bold"
                        name="priority"
                        value={filter}
                        onChange={handleInputChange}
                        id="priority"
                    >
                        <option value="">Select Filter</option>
                        <option value="date">Today Date</option>
                    </select>
                </div>

                <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="bg-dark400 mt-4 rounded">
                        <h5 className="text-center py-2 rounded text-white font-bold bg-purple-500/30">
                            New Task
                        </h5>

                        <div className="h-[75vh] m-4 overflow-y-auto space-y-4">
                            {newTask.map((each, i) => {
                                // console.log(each);
                                return <Task key={i} taskCard={each} />;
                            })}
                        </div>
                    </div>

                    <div className="bg-dark400 mt-4 rounded">
                        <h5 className="text-center py-2 rounded text-white font-bold bg-yellow-500/30">
                            Processing
                        </h5>

                        <div className="h-[75vh] m-4 overflow-y-auto space-y-4">
                            {processing.map((each, i) => {
                                // console.log(each);
                                return <Task key={i} taskCard={each} />;
                            })}
                        </div>
                    </div>

                    <div className="bg-dark400 mt-4 rounded">
                        <h5 className="text-center py-2 rounded text-white font-bold bg-green-500/30">
                            Completed
                        </h5>

                        <div className="h-[75vh] m-4 overflow-y-auto space-y-4">
                            {completed.map((each, i) => {
                                // console.log(each);
                                return <Task key={i} taskCard={each} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
