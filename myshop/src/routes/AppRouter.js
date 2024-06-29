import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
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

const AppRouter = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const token = sessionStorage.getItem("token");
            if (token) {
                const response = await api.get("/user/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data.user);
            }
        } catch (error) {
            setUser(null);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

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
                path="/admin"
                element={
                    <PrivateRoute role="admin">
                        <Adminpage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/login"
                element={
                    isLoggedIn ? (
                        <Navigate to="/" />
                    ) : (
                        <Loginpage setUser={setUser} />
                    )
                }
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
