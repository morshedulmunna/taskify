import {XSquare} from "lucide-react";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CreateTask from "../components/CreateTask";
import ModalState from "../components/Modal";
import PageTittle from "../components/PageTittle";
import Task from "../components/Task";
import {filterData} from "../lib/filterDataShow";
import {getAllTasks} from "../lib/getTasks";
import {updateTaskData} from "../lib/updateStatus";

export default function GroupWork() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    let {groupId} = useParams();
    const [allTask, setAllTask] = useState([]);
    const [newTask, setNewTask] = useState([]);
    const [processing, setProcessing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [filter, setFilter] = useState("");
    const [status, setStatus] = useState("new task");

    console.log(status);

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
    }, [isOpen, filter, isOpen2]);

    const handleInputChange2 = async (e) => {
        e.preventDefault();
        setStatus(e.target.value);
    };

    const updateHandleSubmit = (e) => {
        e.preventDefault();

        const taskData = {
            group_Id: localStorage.getItem("groupId"),
            title: "",
            assign_to: "",
            description: "",
            status: status,
            priority: "normal",
        };

        updateTaskData(taskData, selectedId);
        setIsOpen2(false);
        setStatus("new task");
    };

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
                                return (
                                    <div
                                        key={i}
                                        className="cursor-pointer hover:scale-105 transition-all ease-linear"
                                        onClick={() => {
                                            setIsOpen2(true);
                                            setSelectedId(each.id);
                                        }}
                                    >
                                        <Task taskCard={each} />
                                    </div>
                                );
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
                                return (
                                    <div
                                        key={i}
                                        className="cursor-pointer hover:scale-105 transition-all ease-linear"
                                        onClick={() => {
                                            setIsOpen2(true);
                                            setSelectedId(each.id);
                                        }}
                                    >
                                        <Task taskCard={each} />
                                    </div>
                                );
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
                                return (
                                    <div
                                        key={i}
                                        className="cursor-pointer hover:scale-105 transition-all ease-linear"
                                        onClick={() => {
                                            setIsOpen2(true);
                                            setSelectedId(each.id);
                                        }}
                                    >
                                        <Task taskCard={each} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <ModalState isOpen={isOpen2}>
                <div className="bg-white w-full lg:min-w-[500px] p-5 rounded">
                    <button
                        onClick={() => setIsOpen2(false)}
                        className="text-purple-600 float-right hover:text-purple-400 transition-all ease-linear"
                    >
                        <XSquare size={18} />
                    </button>
                    <h4 className="text-base font-medium">
                        Update Task Status
                        <form onSubmit={updateHandleSubmit} action="">
                            <div className="w-full">
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="description"
                                >
                                    Status
                                </label>
                                <select
                                    className="border py-2 px-2 rounded w-full bg-transparent"
                                    name="status"
                                    id="priority"
                                    onChange={(e) => handleInputChange2(e)}
                                    required
                                >
                                    <option value="new task">New Task</option>

                                    <option value="processing">
                                        Processing
                                    </option>

                                    <option value="completed">Completed</option>
                                </select>
                            </div>

                            <button
                                className="w-full bg-purple-500 hover:bg-purple-500/80 mt-4 py-2 rounded text-white transition-all ease-linear font-medium"
                                type="submit"
                            >
                                Update Status
                            </button>
                        </form>
                    </h4>
                </div>
            </ModalState>
        </>
    );
}
