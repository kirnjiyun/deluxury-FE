import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUser = async () => {
    const response = await api.get("/user/me");

    if (response.status !== 200) {
        throw new Error(response.data.error || "Unknown error occurred");
    }

    return response.data;
};

export const useGetUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: fetchUser,
    });
};
