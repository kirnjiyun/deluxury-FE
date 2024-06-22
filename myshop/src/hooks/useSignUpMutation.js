import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { nextStep } from "../action/SignUpAction";
import { useState } from "react";
import api from "../utils/api";

const signUpUser = async (newUser) => {
    const response = await api.post("/user", newUser);
    return response.data;
};

export const useSignUpMutation = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const mutation = useMutation({
        mutationFn: async (newUser) => {
            try {
                const data = await signUpUser(newUser);
                if (data.status === "success") {
                    dispatch(nextStep());
                } else {
                    throw new Error(data.error || "회원가입 실패");
                }
            } catch (error) {
                const backendError =
                    error.response?.data?.error ||
                    error.message ||
                    "An error occurred.";
                setError(backendError);
                throw new Error(backendError);
            }
        },
        onError: (error) => {
            console.error("An error occurred during mutation:", error);
        },
    });

    return { ...mutation, error };
};
