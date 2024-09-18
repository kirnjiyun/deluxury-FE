import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../action/userAction";
import { useState } from "react";
import api from "../utils/api";

const loginUser = async (user) => {
    const response = await api.post("/auth/login", user);
    return response.data;
};

export const useLoginMutation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const mutation = useMutation({
        mutationFn: async (user) => {
            const data = await loginUser(user);
            if (data.status === "success") {
                sessionStorage.setItem("token", data.token);
                api.defaults.headers["authorization"] = "Bearer " + data.token;
                dispatch(login({ user: data.user, token: data.token }));
                navigate("/");
            } else {
                throw new Error(data.error || "로그인 실패");
            }
        },
        onError: (error) => {
            const backendError = error?.error || "An error occurred.";
            setError(backendError);
        },
    });

    return { ...mutation, error };
};
