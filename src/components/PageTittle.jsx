import React from "react";
import {useLocation} from "react-router-dom";

export default function PageTittle() {
    const {pathname} = useLocation();

    const path = pathname.split("/");
    return (
        <div>
            <p className="capitalize font-bold">{path}</p>
        </div>
    );
}
