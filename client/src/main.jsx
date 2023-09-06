import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/error-page";
import Login from "./pages/login-page";
import Signup from "./pages/signup-page";
import Dashboard from "./routes/Dashboard.jsx";
import Protected from "./utils/Protected";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected isSignedIn={false}>
                <Dashboard />
            </Protected>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/signup",
        element: <Signup />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
