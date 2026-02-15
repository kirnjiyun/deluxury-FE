import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import Paymentpage from "../pages/Paymentpage/Paymentpage";
import OrderSuccesspage from "../pages/OrderSuccesspage/OrderSuccesspage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import api from "../utils/api";
import { setUser } from "../action/userAction";
import { ROUTES } from "../constants";
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
            <Route path={ROUTES.HOME} element={<Homepage />} />
            <Route path="/products" element={<Homepage />} />
            <Route path="/:bigCategory" element={<Productpage />} />
            <Route path="/:bigCategory/:mainCategory" element={<Productpage />} />
            <Route path="/:bigCategory/:mainCategory/:subCategory" element={<Productpage />} />
            <Route path="/:bigCategory/:mainCategory/:subCategory/:id" element={<ProductDetailpage />} />
            <Route path={ROUTES.CART} element={<PrivateRoute role="user"><Cartpage /></PrivateRoute>} />
            <Route path={ROUTES.MY_LIKE} element={<PrivateRoute role="user"><Mylikepage /></PrivateRoute>} />
            <Route path={ROUTES.PAYMENT} element={<PrivateRoute role="user"><Paymentpage /></PrivateRoute>} />
            <Route path={ROUTES.PAYMENT_SUCCESS} element={<PrivateRoute role="user"><OrderSuccesspage /></PrivateRoute>} />
            <Route path={ROUTES.ADMIN} element={<PrivateRoute role="admin"><Adminpage /></PrivateRoute>} />
            <Route path={ROUTES.LOGIN} element={isLoggedIn ? <Navigate to={ROUTES.HOME} replace /> : <Loginpage />} />
            <Route path={ROUTES.SIGNUP} element={isLoggedIn ? <Navigate to={ROUTES.HOME} replace /> : <SignUppage />} />
            <Route path={ROUTES.MY_PAGE} element={<PrivateRoute role="user"><Mypage /></PrivateRoute>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRouter;
