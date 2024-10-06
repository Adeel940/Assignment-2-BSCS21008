import React from "react";
import SideBar from "./components/sideBar";
import NavBar from "./components/navBar";

const BlankPage = () => {

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <NavBar/>
                <div className="bg-slate-200 rounded-md h-24 m-5">
                    <h3 className="text-zinc-700 m-5 font-bold">Empty Card</h3>
                </div>
            </div>
        </div>

    );
};

export default BlankPage;