import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function AppLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    );
}
