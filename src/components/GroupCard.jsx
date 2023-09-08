import React from "react";
import {Link} from "react-router-dom";

export default function GroupCard({group}) {
    const {name, id, teamList} = group;

    return (
        <Link to={`/collaboration/${id}`}>
            <div className="w-full hover:scale-105 transition-all ease-linear cursor-pointer p-4 rounded text-white bg-dark400 min-h-[300px]">
                <div className="flex justify-start space-x-4 items-center">
                    <h5 className="font-bold text-xl">
                        <p className="text-purple-500 underline text-center">
                            {name}
                        </p>{" "}
                    </h5>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <p className="mt-3 capitalize"> Group Id: {id}</p>
                    <p className="mt-3">Member: {teamList.length}</p>
                </div>

                <p className="mt-4 mb-2">Member List</p>
                <div className="flex justify-start gap-2 flex-wrap ">
                    {teamList.map((each, i) => {
                        return (
                            <span
                                key={i}
                                className="text-xs bg-purple-500/20 px-2 py-1 rounded-full"
                            >
                                @{each?.split("@")[0]}
                            </span>
                        );
                    })}
                </div>
            </div>
        </Link>
    );
}
