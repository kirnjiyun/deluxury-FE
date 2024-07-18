import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUser = async () => {
    const response = await api.get("/user/me");

    if (response.status !== 200) {
        throw new Error(response.data.error || "Unknown error occurred");
    }

    return response.data;
};

export const useGetUser = (isLoggedIn) => {
    return useQuery({
        queryKey: ["user"],
        queryFn: fetchUser,
        enabled: isLoggedIn, // 로그인 상태일 때만 쿼리 활성화
    });
};
