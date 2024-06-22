import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import ProductDetailpage from "../pages/ProductDetailpage/ProductDetailpage";
import Cartpage from "../pages/Cartpage/Cartpage";
import Adminpage from "../pages/Adminpage/Adminpage";
import SignUppage from "../pages/SignUppage/SignUppage";
import Loginpage from "../pages/Loginpage/Loginpage";
import Mypage from "../pages/Mypage/Mypage";
import Mylikepage from "../pages/Mylikepage/Mylikepage";
import PrivateRoute from "./PrivateRoute";
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Homepage />} />
            <Route path="/products/:id" element={<ProductDetailpage />} />
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
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<SignUppage />} />
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
