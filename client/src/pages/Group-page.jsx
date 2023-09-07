import {XSquare} from "lucide-react";
import React, {useState} from "react";
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
                <p>List of group name</p>
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

                            <select
                                name="user-list"
                                id="user"
                                className="w-full py-2 bg-transparent border mt-4 rounded"
                            >
                                <option value="">Select team member</option>
                                <option value="rahim">Rahim</option>
                            </select>
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
