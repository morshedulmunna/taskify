import React from "react";
import {Link} from "react-router-dom";

export default function GroupCard() {
    return (
        <Link to={"/collaboration/2"}>
            <div className="w-full hover:scale-105 transition-all ease-linear cursor-pointer p-4 rounded text-white bg-dark400 ">
                <div className="flex justify-start space-x-4 items-center">
                    <h5 className="font-bold text-xl">Team X-Coder</h5>
                    <span className="text-xs italic bg-purple-500/20 p-1 rounded-full text-yellow-500 px-2 ">
                        @munna
                    </span>
                </div>

                <p className="mt-3">- Member: 23</p>

                <div className="flex flex-wrap space-x-1 gap-1 mt-4">
                    <span className="text-xs italic bg-purple-500/20 p-1 rounded-full text-yellow-500/30 px-2 ">
                        @munna0
                    </span>

                    <span className="text-xs italic bg-purple-500/20 p-1 rounded-full text-yellow-500/30 px-2 ">
                        @mim
                    </span>
                    <span className="text-xs italic bg-purple-500/20 p-1 rounded-full text-yellow-500/30 px-2 ">
                        @kobir1
                    </span>

                    <span className="text-xs italic bg-purple-500/20 p-1 rounded-full text-yellow-500/30 px-2 ">
                        @ratul
                    </span>

                    <span className="text-xs italic bg-purple-500/20 p-1 rounded-full text-yellow-500/30 px-2 ">
                        @sharmin3
                    </span>

                    <span className="text-xs italic bg-purple-500/20 p-1 rounded-full text-yellow-500/30 px-2 ">
                        @nila
                    </span>
                    <span className="text-xs italic bg-purple-500/20 p-1 rounded-full text-yellow-500/30 px-2 ">
                        @minhaz
                    </span>
                    <span className="text-xs italic bg-purple-500/20 p-1 rounded-full text-yellow-500/30 px-2 ">
                        @tab2
                    </span>
                </div>
            </div>
        </Link>
    );
}
