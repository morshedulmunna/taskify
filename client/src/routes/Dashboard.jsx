import React from "react";
import {Outlet} from "react-router-dom";
import PageTittle from "../components/PageTittle";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
        <>
            <div className="flex">
                <aside className="w-72 h-full hidden lg:block bg-Dark">
                    <Sidebar />
                </aside>

                <div className="w-full h-full">
                    <div className=" px-4 py-4 text-white bg-dark400">
                        <PageTittle />
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
