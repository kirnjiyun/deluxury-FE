import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../utils/api";

const loginUser = async (user) => {
    const response = await api.post("/user/login", user);
    return response.data;
};

export const useLoginMutation = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const mutation = useMutation({
        mutationFn: async (user) => {
            const data = await loginUser(user);
            if (data.status === "success") {
                // session storage에 토큰 저장
                sessionStorage.setItem("token", data.token);
                // header에 토큰 값 설정
                api.defaults.headers["authorization"] = "Bearer " + data.token;
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
