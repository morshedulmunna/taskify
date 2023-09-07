import React, {useState} from "react";
import {Navigate} from "react-router-dom";

function Protected({children}) {
    const [isSignIn, setIsSignIn] = useState(true);

    if (!isSignIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
export default Protected;
