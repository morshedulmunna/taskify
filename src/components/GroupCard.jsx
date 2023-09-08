import React from "react";
import {Link} from "react-router-dom";

export default function GroupCard({group}) {
    const {name, id} = group;

    return (
        <Link to={`/collaboration/${id}`}>
            <div className="w-full hover:scale-105 transition-all ease-linear cursor-pointer p-4 rounded text-white bg-dark400 ">
                <div className="flex justify-start space-x-4 items-center">
                    <h5 className="font-bold text-xl">
                        Group Name:
                        <span className="text-purple-500 underline pl-3">
                            {name}
                        </span>{" "}
                    </h5>
                </div>

                <p className="mt-3 capitalize">- Group Id: {id}</p>
                <p className="mt-3">- Member: 0</p>
            </div>
        </Link>
    );
}
