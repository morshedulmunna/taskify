import {CheckCheck, XSquare} from "lucide-react";
import React, {useState} from "react";
import ReactDatePicker from "react-datepicker";
import ModalState from "./Modal";

export default function CreateTask() {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
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
                    <form className="text-sm">
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
                                className="border py-2 px-2 rounded w-full"
                                type="text"
                                placeholder=" Title name"
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
                                cols="30"
                                rows="2"
                                className="border py-2 px-2 rounded w-full"
                                placeholder="Description"
                            ></textarea>
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
                                    name="priority"
                                    id="priority"
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
