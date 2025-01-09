import React from "react";
import Sidebar from "./Sidebar";

export default function Main({ children }) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    );
}
