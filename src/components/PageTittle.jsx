import {Tally3} from "lucide-react";
import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import Sidebar from "./Sidebar";

export default function PageTittle() {
    const {pathname} = useLocation();

    const path = pathname.split("/").join("");
    const [toggle, setToggle] = useState(false);

    return (
        <div className="relative">
            <div className="flex justify-between items-center">
                <p className="capitalize font-bold">
                    {path === "" ? "Home" : path}
                </p>

                <Tally3
                    onClick={() => setToggle(!toggle)}
                    className="rotate-90 lg:hidden cursor-pointer"
                />
            </div>

            <div
                className={` lg:hidden absolute top-10 right-0 ${
                    toggle ? "block" : "hidden"
                }`}
            >
                <Sidebar />
            </div>
        </div>
    );
}
