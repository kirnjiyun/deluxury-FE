import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import ProductDetailpage from "../pages/ProductDetailpage/ProductDetailpage";
import Cartpage from "../pages/Cartpage/Cartpage";
import Adminpage from "../pages/Adminpage/Adminpage";
import SignUppage from "../pages/SignUppage/SignUppage";
import Loginpage from "../pages/Loginpage/Loginpage";
import Mypage from "../pages/Mypage/Mypage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Homepage />} />
            <Route path="/products/:id" element={<ProductDetailpage />} />
            <Route path="/admin" element={<Adminpage />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<SignUppage />} />
            <Route path="/me" element={<Mypage />} />
        </Routes>
    );
};

export default AppRouter;
