import {Search, XSquare} from "lucide-react";
import React, {useEffect, useState} from "react";
import GroupCard from "../components/GroupCard";
import ModalState from "../components/Modal";
import PageTittle from "../components/PageTittle";
import {createGroup} from "../lib/createGroup";
import {getAllDataFromObjectStore} from "../lib/gettingGroupList";
import {searching} from "../lib/searchGroup";

export default function Group() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [groupList, setGroupList] = useState([]);
    const [groupName, setGroupName] = useState("");
    const myEmail = localStorage.getItem("email");
    const [teamEmail, setTeamEmail] = useState([myEmail]);
    const [inputValue, setInputValue] = useState("");

    const groupData = {
        userEmail: myEmail,
        name: groupName,
        teamList: teamEmail,
    };

    useEffect(() => {
        getAllDataFromObjectStore((data) => {
            const filteredData = data.filter((item) =>
                item.teamList.includes(myEmail)
            );

            setGroupList(filteredData);
        });
    }, [groupName, search, isOpen]);

    // Handle Searching
    const handleSearch = (e) => {
        e.preventDefault();
        const res = searching(groupList, search);
        console.log(res);
        setGroupList(res);
    };

    // handle Team Name or Group name set
    const handleTeamName = (event) => {
        setGroupName(event.target.value);
    };

    // Handle Group Create Form
    const handleGroupCreateSubmit = (e) => {
        e.preventDefault();

        createGroup(groupData);
        setIsOpen(false);
        setTeamEmail([myEmail]);

        setGroupName("");
    };

    // Handle Email added Form
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Handle Email value to set Email list means Team List
    const handleAddValue = (e) => {
        e.preventDefault();
        setTeamEmail([...teamEmail, inputValue]);
        setInputValue("");
    };

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

                        <form
                            onSubmit={handleSearch}
                            className="flex items-center"
                            action=""
                        >
                            <input
                                className="bg-transparent border rounded-l px-2 py-[8px] w-[100%] border-gray-600 outline-none focus:border-purple-500 text-white"
                                type="text"
                                name="search"
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search Group Name"
                            />
                            <button
                                type="submit"
                                className="bg-purple-500 text-white py-2 px-2 rounded-r flex transition-all ease-linear hover:bg-purple-500/80 justify-center items-center space-x-1"
                            >
                                <span className="text-base font-semibold">
                                    Search
                                </span>
                                <Search className=" " />
                            </button>
                        </form>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4">
                        {groupList.length === 0 && (
                            <p className="text-red-500 font-semibold">
                                No Group Available
                            </p>
                        )}

                        {groupList.map((group, index) => (
                            <GroupCard group={group} key={index} />
                        ))}
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
                        <form
                            onSubmit={handleGroupCreateSubmit}
                            className="text-sm"
                        >
                            <div>
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="name"
                                >
                                    Team Name
                                </label>
                                <input
                                    name="name"
                                    value={groupName}
                                    onChange={handleTeamName}
                                    id="name"
                                    className="border py-2 px-2 rounded w-full"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="name"
                                >
                                    Team Member Email
                                </label>

                                <form className="flex items-center" action="">
                                    <input
                                        type="text"
                                        placeholder="Type team member email & press enter"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        className="border py-2 px-2 rounded w-full"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="whitespace-nowrap bg-purple-500 py-2 px-2 rounded text-white"
                                        onClick={(e) => handleAddValue(e)}
                                    >
                                        Add Email
                                    </button>
                                </form>

                                <p className="text-red-500">
                                    Email Added: {teamEmail.length}
                                </p>
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
