import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, role, redirectTo }) => {
    const { isLoggedIn, user } = useSelector((state) => state.user);

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    if (redirectTo && isLoggedIn) {
        return <Navigate to={redirectTo} />;
    }
    if (role && user.user.role !== role) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
