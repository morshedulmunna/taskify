import {CalendarRange} from "lucide-react";
import React from "react";

export default function Task({taskCard}) {
    const {description, title, due_date, priority, status, assign_to} =
        taskCard;

    return (
        <>
            <div className="text-white border-l border-dotted bg-Dark p-4 rounded">
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold"> {title} </h3>
                    {/* <XSquare
                        size={16}
                        className="hover:text-red-500 cursor-pointer transition-all ease-linear"
                    /> */}
                </div>
                <p className="text-sm text-gray-500">{description}</p>

                <p className="text-sm mt-2 text-purple-500">
                    Assign by:
                    <span className="text-purple-300 ml-2">{assign_to}</span>
                </p>

                <div className="flex justify-between mt-4 mb-2">
                    <div className="flex items-center text-xs">
                        <CalendarRange size={12} />
                        <p className="ml-1">{due_date}</p>
                    </div>

                    <div className="flex justify-start items-center space-x-2">
                        <p
                            className={` text-xs px-2 py-1 rounded-full ${
                                (status === "new task" && "bg-purple-500/30") ||
                                (status === "processing" &&
                                    "bg-yellow-500/30") ||
                                (status === "completed" && "bg-green-500/30")
                            }`}
                        >
                            {status}
                        </p>

                        <p
                            className={` text-xs px-2 py-1 rounded-full ${
                                (priority === "normal" && "bg-gray-500/30") ||
                                (priority === "medium" && "bg-pink-500/30") ||
                                (priority === "urgent" && "bg-red-600")
                            }`}
                        >
                            {priority}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
