import React from "react";
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div>
            <Link className="block" to={"/collaboration"}>
                collaboration Group
            </Link>

            <Link to={"/Profile"}>Profile</Link>
        </div>
    );
}
