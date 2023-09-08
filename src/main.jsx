import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {UserContextProvider} from "./context/userContext";
import "./index.css";
import DashboardPage from "./pages/dashboard-page";
import ErrorPage from "./pages/error-page";
import Group from "./pages/Group-page";
import GroupWork from "./pages/group-work";
import Login from "./pages/login-page";
import Profile from "./pages/profile-page";
import Signup from "./pages/signup-page";
import Dashboard from "./routes/Dashboard.jsx";
import Protected from "./utils/Protected";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected>
                <Dashboard />
            </Protected>
        ),
        children: [
            {
                path: "/",
                element: <DashboardPage />,
            },
            {
                path: "/collaboration",
                element: <Group />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/collaboration/:groupId",
                element: <GroupWork />,
            },
        ],
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
        <UserContextProvider>
            <RouterProvider router={router} />
        </UserContextProvider>
    </React.StrictMode>
);
