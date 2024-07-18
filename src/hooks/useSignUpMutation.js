import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { nextStep } from "../action/SignUpAction";
import api from "../utils/api";

const signUpUser = async (newUser) => {
    const response = await api.post("/user", newUser);
    return response.data;
};

export const useSignUpMutation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    return useMutation({
        mutationFn: signUpUser,
        onSuccess: (data) => {
            if (data.status === "success") {
                dispatch(nextStep());
            } else {
                setError(data.error || "회원가입 실패");
            }
        },
        onError: (error) => {
            const backendError =
                error.response?.data?.error ||
                error.message ||
                "An error occurred.";
            setError(backendError);
        },
    });
};
