import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../utils/api";
import { notify } from "../components/Toast/Toast";

const addToLikeApi = async (item) => {
    const response = await api.post("/like", item);
    return response.data;
};

export const useAddToLike = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addToLikeApi,
        onSuccess: (data) => {
            notify("아이템이 찜 목록에 추가되었습니다.", "success");
            queryClient.invalidateQueries("like");
        },
        onError: (error) => {
            const backendError = error.error || "An error occurred.";
            notify(backendError);
            console.log(error);
        },
    });
};
