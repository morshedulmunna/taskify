import React from "react";
import CreateTask from "../components/CreateTask";
import PageTittle from "../components/PageTittle";
import Task from "../components/Task";

export default function GroupWork() {
    return (
        <>
            <div className=" px-4 py-4 mb-6 rounded text-white bg-dark400 ">
                <PageTittle />
            </div>
            <div className="m-4 ">
                <CreateTask />

                <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="bg-dark400 mt-4 rounded">
                        <h5 className="text-center py-2 rounded text-white font-bold bg-purple-500/30">
                            New Task
                        </h5>

                        <div className="h-[75vh] m-4 overflow-y-auto space-y-4">
                            <Task />

                            <Task />
                            <Task />
                            <Task />
                            <Task />
                            <Task />
                        </div>
                    </div>

                    <div className="bg-dark400 mt-4 rounded">
                        <h5 className="text-center py-2 rounded text-white font-bold bg-yellow-500/30">
                            Processing
                        </h5>

                        <div className="h-[75vh] m-4 overflow-y-auto space-y-4">
                            <Task />

                            <Task />
                            <Task />
                            <Task />
                        </div>
                    </div>

                    <div className="bg-dark400 mt-4 rounded">
                        <h5 className="text-center py-2 rounded text-white font-bold bg-green-500/30">
                            Completed
                        </h5>

                        <div className="h-[75vh] m-4 overflow-y-auto space-y-4">
                            <Task />

                            <Task />
                            <Task />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
