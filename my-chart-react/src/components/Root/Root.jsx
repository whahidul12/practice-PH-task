import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";

const Root = ({ booFN }) => {
    return (
        <div>
            <Outlet />
            <Header />
            <button onClick={booFN}>click</button>
        </div>
    );
};

export default Root;
