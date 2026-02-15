import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, role, redirectTo }) => {
    const { isLoggedIn, user } = useSelector((state) => state.user);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    if (redirectTo) {
        return <Navigate to={redirectTo} replace />;
    }
    if (role && user?.user?.role !== role) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
