import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useGetUser } from "../hooks/useGetUser";
import { useDispatch } from "react-redux";
import { setUser, logout } from "../action/userAction";

export default function AppLayout({ children }) {
    const dispatch = useDispatch();
    const { data: userData, isLoading, isError } = useGetUser();

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
