import { useMutation } from "@tanstack/react-query";
import api from "../utils/api";

const signUpUser = async (newUser) => {
    const response = await api.post("/api/user", newUser);
    return response.data;
};

export const useSignUpMutation = () => {
    return useMutation({
        mutationFn: signUpUser,
    });
};
