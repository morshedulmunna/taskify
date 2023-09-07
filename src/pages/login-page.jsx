import React from "react";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";

export default function Login() {
    return (
        <div>
            <div className="h-[100vh]  flex justify-center items-center">
                <div className="shadow-sm bg-Dark rounded text-white   p-6 md:w-[50%] lg:w-[24%]">
                    {/* logo area */}
                    <Logo />
                    <p className="mt-4">Welcome Back to Taskify</p>
                    {/* Form */}
                    <div>
                        <h2 className="font-bold text-2xl mt-6">Sign in</h2>
                        <form className="flex flex-col mt-2 gap-4" action="">
                            <input
                                className="border py-2 px-2 rounded bg-transparent"
                                type="text"
                                placeholder="example@gmial.com"
                            />

                            <input
                                className="border py-2 px-2 rounded bg-transparent"
                                type="password"
                                placeholder="password"
                            />

                            <button
                                className="bg-pink-500 hover:bg-opacity-70 transition-all ease-linear mb-5 py-2 text-white font-bold rounded"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </form>

                        <div>
                            <span className="mr-5">Don't have an account?</span>
                            <Link
                                className="text-pink-500 font-semibold underline hover:text-pink-400 transition-all ease-linear"
                                to={"/signup"}
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
