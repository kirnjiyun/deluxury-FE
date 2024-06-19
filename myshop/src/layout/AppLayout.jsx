import React from "react";
import Navbar from "../components/Navbar/Navbar";

const user = { name: "John Doe" };

export default function AppLayout({ children }) {
    return (
        <div>
            <Navbar user={user} />
            {children}
        </div>
    );
}
