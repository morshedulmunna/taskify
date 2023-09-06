import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/Logo.svg";

export default function Signup() {
    return (
        <div>
            <div className="h-[100vh] flex justify-center items-center">
                <div className="shadow-sm rounded border border-gray-200 p-6 w-[30%]">
                    {/* logo area */} {/* logo area */}
                    <div className="flex justify-center items-center flex-col">
                        <div className="flex">
                            <img width={40} src={logo} alt="logo" />
                            <span className="text-3xl text-pink-500 ml-2 font-bold">
                                Taskify
                            </span>
                        </div>
                        <p className="mt-4">Welcome Back to Taskify</p>
                    </div>
                    {/* Form */}
                    <div>
                        <h2 className="font-bold text-2xl mt-6">Register</h2>
                        <form className="flex flex-col mt-2 gap-4" action="">
                            <input
                                name="name"
                                id="name"
                                className="border py-2 px-2 rounded"
                                type="text"
                                placeholder="Your Name"
                            />

                            <input
                                name="email"
                                id="email"
                                className="border py-2 px-2 rounded"
                                type="text"
                                placeholder="example@gmial.com"
                            />

                            <input
                                name="password"
                                className="border py-2 px-2 rounded"
                                type="password"
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
