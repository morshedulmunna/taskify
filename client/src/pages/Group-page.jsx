import {Search, XSquare} from "lucide-react";
import React, {useState} from "react";
import GroupCard from "../components/GroupCard";
import ModalState from "../components/Modal";
import PageTittle from "../components/PageTittle";

export default function Group() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className=" px-4 py-4 mb-6 rounded text-white bg-dark400">
                <PageTittle />
            </div>

            <div className="m-4">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-purple-600 hover:bg-purple-500 transition-all ease-linear p-2 rounded text-white font-medium"
                >
                    + Create group
                </button>

                <div className="h-[1px] w-full bg-purple-600 mt-6"></div>

                <div className="mt-6">
                    <div className="flex  items-center ">
                        <p className="text-white mr-4 text-xl font-medium">
                            List of group name -------------------
                        </p>

                        <input
                            className="bg-transparent border rounded-l px-2 py-[8px] w-[30%] border-gray-600 outline-none focus:border-purple-500 text-white"
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search Group Name"
                        />
                        <button className="bg-purple-500 text-white py-2 px-2 rounded-r flex transition-all ease-linear hover:bg-purple-500/80 justify-center items-center space-x-1">
                            <span className="text-base font-semibold">
                                Search
                            </span>
                            <Search className=" " />
                        </button>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4">
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                    </div>
                </div>

                <ModalState isOpen={isOpen}>
                    <div className="bg-white w-full lg:min-w-[500px] p-5 rounded">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-purple-600 float-right hover:text-purple-400 transition-all ease-linear"
                        >
                            <XSquare size={18} />
                        </button>
                        <h4 className="text-base font-medium">
                            - Create Collaboration Team Group
                        </h4>
                        <form className="text-sm">
                            <div>
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="name"
                                >
                                    Team Name
                                </label>
                                <input
                                    name="name"
                                    id="name"
                                    className="border py-2 px-2 rounded w-full"
                                    type="text"
                                    placeholder="Name"
                                />

                                {/* TODO: Multi input team Member list */}
                            </div>

                            <button
                                className="w-full bg-purple-500 mt-4 py-2 rounded text-white font-medium"
                                type="submit"
                            >
                                Create Team
                            </button>
                        </form>
                    </div>
                </ModalState>
            </div>
        </>
    );
}
