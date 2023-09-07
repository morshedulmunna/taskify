import React, {useState} from "react";
import {Link} from "react-router-dom";
import {createCollectionDB} from "../../lib/indexDB";
import logo from "../assets/Logo.svg";

export default function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        groupId: [],
    });

    console.log(user);

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const request = createCollectionDB(); // Don't await here

        request.onsuccess = (event) => {
            const db = event.target.result; // Get the database instance
            const userToAdd = {...user}; // Create a copy of the user object

            const transaction = db.transaction("user_data", "readwrite");
            const store = transaction.objectStore("user_data");

            const addRequest = store.put(userToAdd);

            addRequest.onsuccess = (event) => {
                console.log(
                    "User added to the store with key: " + event.target.result
                );
            };

            addRequest.onerror = (event) => {
                console.error("Error adding user: " + event.target.error);
            };

            setUser({
                name: "",
                email: "",
                password: "",
                groupId: [],
            });
        };

        request.onerror = (event) => {
            console.error("Error opening database: " + event.target.error);
        };
    };

    return (
        <div>
            <div className="h-[100vh] flex justify-center items-center">
                <div className="shadow-sm rounded bg-Dark p-6 w-[30%]">
                    {/* logo area */} {/* logo area */}
                    <div className="flex justify-center items-center flex-col">
                        <div className="flex">
                            <img width={50} src={logo} alt="logo" />
                            <span className="text-4xl text-pink-500 ml-2 font-extrabold">
                                Taskify
                            </span>
                        </div>
                        <p className="mt-4">Welcome Back to Taskify</p>
                    </div>
                    {/* Form */}
                    <div>
                        <h2 className="font-bold text-2xl mt-6">Register</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col mt-2 gap-4"
                            action=""
                        >
                            <input
                                id="name"
                                className="border py-2 px-2 rounded"
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                                placeholder="your Name"
                            />

                            <input
                                id="email"
                                className="border py-2 px-2 rounded"
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                                placeholder="example@gmial.com"
                            />

                            <input
                                className="border py-2 px-2 rounded"
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                                placeholder="password"
                            />

                            <button
                                className="bg-pink-500 hover:bg-opacity-70 transition-all ease-linear mb-5 py-2 text-white font-bold rounded"
                                type="submit"
                            >
                                Sign up
                            </button>
                        </form>

                        <div>
                            <span className="mr-5">
                                already have an account?
                            </span>
                            <Link
                                className="text-pink-500 font-semibold underline hover:text-pink-400 transition-all ease-linear"
                                to={"/login"}
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
