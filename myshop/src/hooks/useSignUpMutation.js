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
                const backendError = error.error || "An error occurred.";
                setError(backendError);
                throw new Error(backendError);
            }
        },
        // onError: (error) => {
        //     const backendError =
        //         error.response?.data?.error ||
        //         error.message ||
        //         "An error occurredsdf.";
        //     setError(backendError);
        // },
    });

    return { ...mutation, error };
};
