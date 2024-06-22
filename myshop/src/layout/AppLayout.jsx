// src/layout/AppLayout.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function AppLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
