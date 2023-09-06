import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
        <>
            <div className="h-12 bg-yellow-200">
                <p>topbar</p>
            </div>
            <div className="flex">
                <aside className="w-72   hidden lg:block bg-Dark">
                    <Sidebar />
                </aside>

                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
