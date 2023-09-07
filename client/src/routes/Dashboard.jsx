import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
        <>
            <div className="flex">
                <aside className="w-72 h-full hidden lg:block bg-Dark">
                    <Sidebar />
                </aside>

                <div className="w-full h-full">
                    <div className="h-20 bg-dark400"></div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
