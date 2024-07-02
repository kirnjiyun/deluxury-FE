import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "../pages/Homepage/Homepage";
import ProductDetailpage from "../pages/ProductDetailpage/ProductDetailpage";
import Cartpage from "../pages/Cartpage/Cartpage";
import Adminpage from "../pages/Adminpage/Adminpage";
import SignUppage from "../pages/SignUppage/SignUppage";
import Loginpage from "../pages/Loginpage/Loginpage";
import Mypage from "../pages/Mypage/Mypage";
import Mylikepage from "../pages/Mylikepage/Mylikepage";
import PrivateRoute from "./PrivateRoute";
import Productpage from "../pages/Prouductpage/Productpage";
import api from "../utils/api";
import { setUser } from "../action/userAction";
import Paymentpage from "../pages/Paymentpage/Paymentpage";
const AppRouter = () => {
    const { isLoggedIn, token } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const getUser = async () => {
        try {
            const token = sessionStorage.getItem("token");
            if (token) {
                const response = await api.get("/user/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                dispatch(setUser(response.data.user));
            }
        } catch (error) {
            dispatch(setUser(null));
        }
    };

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token]);

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Homepage />} />
            <Route path="/:bigCategory" element={<Productpage />} />
            <Route
                path="/:bigCategory/:mainCategory"
                element={<Productpage />}
            />
            <Route
                path="/:bigCategory/:mainCategory/:subCategory"
                element={<Productpage />}
            />
            <Route
                path="/:bigCategory/:mainCategory/:subCategory/:id"
                element={<ProductDetailpage />}
            />
            <Route
                path="/cart"
                element={
                    <PrivateRoute role="user">
                        <Cartpage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/mylike"
                element={
                    <PrivateRoute role="user">
                        <Mylikepage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/payment"
                element={
                    <PrivateRoute role="user">
                        <Paymentpage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/admin"
                element={
                    <PrivateRoute role="admin">
                        <Adminpage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/login"
                element={isLoggedIn ? <Navigate to="/" /> : <Loginpage />}
            />
            <Route
                path="/signup"
                element={isLoggedIn ? <Navigate to="/" /> : <SignUppage />}
            />
            <Route
                path="/me"
                element={
                    <PrivateRoute role="user">
                        <Mypage />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default AppRouter;
