import {Boxes, LayoutDashboardIcon, LogOut, UserSquare} from "lucide-react";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useUser} from "../context/userContext";
import Logo from "./Logo";

export default function Sidebar() {
    const location = useLocation();

    const {logout} = useUser();

    return (
        <div className=" h-[50vh] lg:h-[100vh] text-white bg-Dark">
            <div className="mb-10 p-4">
                <Logo />
            </div>

            {data.map((each) => (
                <Link
                    key={each.href}
                    to={each.href}
                    className={`flex items-center justify-start ml-4 space-x-2 mb-6  py-2 px-4 rounded mx-4
                    ${
                        location.pathname === each.href &&
                        "text-purple-500 bg-purple-500/10"
                    }
                    `}
                >
                    <each.icon size={18} />
                    <p>{each.level}</p>
                </Link>
            ))}
            <div className="h-[1px] mb-2 w-full bg-gray-500"></div>
            <div className="h-[1px] mb-6 w-full bg-gray-500"></div>
            {/* Settings */}
            <div className="ml-4">
                <p className="text-sm text-gray-400">Settings</p>
                <div
                    onClick={() => {
                        logout();
                    }}
                    className="mt-6 hover:text-purple-500 transition-all ease-linear cursor-pointer w-fit mr-6 space-x-2 ml-4 text-base flex items-center"
                >
                    <LogOut size={18} />
                    <button className="    py-2 rounded ">Log out</button>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        level: "Dashboard",
        icon: LayoutDashboardIcon,
        href: "/",
    },
    {
        level: "Collaboration Team",
        icon: Boxes,
        href: "/collaboration",
    },
    {
        level: "Profile",
        icon: UserSquare,
        href: "/profile",
    },
];
