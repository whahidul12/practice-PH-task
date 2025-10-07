import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import mobiles from "./components/mobiles/mobiles.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: "/mobiles", Component: mobiles },
        ],
    },
    {
        path: "/contact-us",
        element: <div>contact-us page</div>,
    },
    {
        path: "/feel-me",
        element: <div>feel-me page</div>,
    },
    {
        path: "app",
        Component: App,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
