import React from "react";
import logo from "../assets/Logo.svg";

export default function Logo() {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex">
                <img width={50} src={logo} alt="logo" />
                <span className="text-4xl text-pink-500 ml-2 font-extrabold">
                    Taskify
                </span>
            </div>
        </div>
    );
}
