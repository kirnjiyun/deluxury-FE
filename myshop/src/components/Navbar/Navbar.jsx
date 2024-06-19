import React from "react";

const Navbar = ({ user }) => {
    return (
        <nav>
            <span>Welcome, {user.name}</span>
        </nav>
    );
};

export default Navbar;
