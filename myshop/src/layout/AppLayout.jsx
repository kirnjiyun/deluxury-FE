// src/layout/AppLayout.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function AppLayout({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const user = isLoggedIn ? { name: "John Doe" } : null;

    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            <Navbar
                user={user}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
                onLogin={handleLogin}
            />
            {children}
        </div>
    );
}
