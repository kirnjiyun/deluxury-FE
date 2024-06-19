// src/layout/AppLayout.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function AppLayout({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const user = isLoggedIn ? { name: "John Doe" } : null;

    const handleLogout = () => {
        setIsLoggedIn(false);
        // 로그아웃 시 추가적인 로직이 필요한 경우 여기에 추가
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
