import {XSquare} from "lucide-react";
import React, {useState} from "react";
import GroupCard from "../components/GroupCard";
import ModalState from "../components/Modal";

export default function Group() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="m-4">
            <button
                onClick={() => setIsOpen(true)}
                className="bg-purple-600 hover:bg-purple-500 transition-all ease-linear p-2 rounded text-white font-medium"
            >
                + Create group
            </button>

            <div className="h-[1px] w-full bg-purple-600 mt-6"></div>

            <div className="mt-6">
                <p className="text-white text-xl font-medium">
                    List of group name -------------------
                </p>

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
                <div className="bg-white p-5 rounded">
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
    );
}
