import {CalendarRange} from "lucide-react";
import React from "react";

export default function Task() {
    return (
        <div className="text-white border-l border-dotted bg-Dark p-4 rounded">
            <h3 className="text-lg font-semibold">Lorem ipsum dolor sit.</h3>
            <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                ipsum dolor sit amet.
            </p>

            <div className="flex justify-between mt-4 mb-2">
                <div className="flex items-center text-sm">
                    <CalendarRange size={16} />
                    <p>12 Dec 2023</p>
                </div>

                <div className="flex justify-start items-center space-x-2">
                    <p className="bg-purple-500/30 text-xs px-2 py-1 rounded-full">
                        Processing
                    </p>

                    <p className="bg-red-500/30 text-xs px-2 py-1 rounded-full">
                        Urgent
                    </p>
                </div>
            </div>

            {/* <div>
                <p>Processing</p>
                <div className="w-full h-2 flex mt-2 justify-start items-center border border-purple-500 rounded-full">
                    <div className="w-[50%] h-2  bg-purple-500 rounded-full"></div>
                </div>
            </div> */}
        </div>
    );
}
