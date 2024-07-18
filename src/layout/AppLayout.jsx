import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useGetUser } from "../hooks/useGetUser";
import { useDispatch } from "react-redux";
import { setUser, logout } from "../action/userAction";

const checkIsLoggedIn = () => {
    return sessionStorage.getItem("token") !== null;
};

export default function AppLayout({ children }) {
    const dispatch = useDispatch();
    const isLoggedIn = checkIsLoggedIn();
    const { data: userData, isLoading, isError } = useGetUser(isLoggedIn);

    useEffect(() => {
        if (userData) {
            dispatch(setUser(userData));
        } else if (isError) {
            console.error("Error fetching user data.");
            dispatch(logout());
        }
    }, [dispatch, userData, isError]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    );
}
