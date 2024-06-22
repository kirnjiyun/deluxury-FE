import { useMutation } from "@tanstack/react-query";
import api from "../utils/api";

const loginUser = async (User) => {
    const response = await api.post("/api/user/login", User);
    return response.data;
};

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: loginUser,
    });
};
