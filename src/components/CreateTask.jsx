import {CheckCheck, XSquare} from "lucide-react";
import React, {useState} from "react";
import ReactDatePicker from "react-datepicker";
import {createTask} from "../lib/createTask";
import {formatDate} from "../lib/dateFormt";
import ModalState from "./Modal";

export default function CreateTask({isOpen, setIsOpen}) {
    const [startDate, setStartDate] = useState(new Date());

    const [taskValue, setTaskValue] = useState({
        title: "",
        assign_to: "",
        description: "",
        status: "new task",
        due_date: formatDate(startDate),
        priority: "normal",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setTaskValue({
            ...taskValue,
            [name]: value,
        });
    };

    const handleTaskCreate = (e) => {
        e.preventDefault();
        console.log(taskValue);
        createTask({
            group_Id: localStorage.getItem("groupId"),
            ...taskValue,
        });

        setIsOpen(false);

        setStartDate(new Date());

        setTaskValue({
            title: "",
            description: "",
            status: "new task",
            due_date: formatDate(startDate),
            priority: "normal",
        });
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-purple-600 hover:bg-purple-500 transition-all ease-linear p-2 rounded text-white font-medium"
            >
                <CheckCheck className="inline mr-1" />
                Create Task
            </button>

            <div className="h-[1px] w-full bg-purple-600 mt-6"></div>

            <ModalState isOpen={isOpen}>
                <div className="bg-white w-full lg:min-w-[500px] p-5 rounded">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-purple-600 float-right hover:text-purple-400 transition-all ease-linear"
                    >
                        <XSquare size={18} />
                    </button>
                    <h4 className="text-base font-medium">- Create Task</h4>
                    <form onSubmit={handleTaskCreate} className="text-sm">
                        <div>
                            <label
                                className="block text-sm mb-1 mt-4"
                                htmlFor="name"
                            >
                                Title
                            </label>
                            <input
                                name="title"
                                id="name"
                                value={taskValue.title}
                                onChange={handleInputChange}
                                className="border py-2 px-2 rounded w-full"
                                type="text"
                                placeholder=" Title name"
                                required
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm mb-1 mt-4"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                value={taskValue.description}
                                onChange={handleInputChange}
                                cols="30"
                                rows="2"
                                className="border py-2 px-2 rounded w-full"
                                placeholder="Description"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label
                                className="block text-sm mb-1 mt-4"
                                htmlFor="name"
                            >
                                Task assign to
                            </label>
                            <input
                                name="assign_to"
                                id="assign_to"
                                value={taskValue.assign_to}
                                onChange={handleInputChange}
                                className="border py-2 px-2 rounded w-full"
                                type="text"
                                placeholder="Enter team members email"
                                required
                            />
                        </div>

                        <div className="flex items-center gap-4">
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
                                    value={taskValue.status}
                                    onChange={handleInputChange}
                                    id="priority"
                                    required
                                >
                                    <option value="new">New Task</option>

                                    <option value="processing">
                                        Processing
                                    </option>

                                    <option value="completed">Completed</option>
                                </select>
                            </div>

                            <div className="w-full">
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="description"
                                >
                                    Due Date
                                </label>
                                <ReactDatePicker
                                    selected={startDate}
                                    className="border py-2 px-2 rounded w-full"
                                    onChange={(date) => setStartDate(date)}
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <label
                                className="block text-sm mb-1 mt-4"
                                htmlFor="description"
                            >
                                Priority
                            </label>
                            <select
                                className="border py-2 px-2 rounded w-full bg-transparent"
                                name="priority"
                                value={taskValue.priority}
                                onChange={handleInputChange}
                                id="priority"
                            >
                                <option value="normal">Normal</option>

                                <option value="medium">Medium</option>

                                <option value="urgent">Urgent</option>
                            </select>
                        </div>

                        <button
                            className="w-full bg-purple-500 hover:bg-purple-500/80 mt-4 py-2 rounded text-white transition-all ease-linear font-medium"
                            type="submit"
                        >
                            Ready Task
                        </button>
                    </form>
                </div>
            </ModalState>
        </>
    );
}
