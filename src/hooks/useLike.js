import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
const deleteFromLikeApi = async (itemId) => {
    const response = await api.delete(`/like/${itemId}`);
    return response.data;
};

export const useRemoveFromLike = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteFromLikeApi,
        onSuccess: (data) => {
            notify("아이템이 찜 목록에서 제거되었습니다.", "success");
            queryClient.invalidateQueries("like");
        },
        onError: (error) => {
            const backendError = error.error || "An error occurred.";
            notify(backendError);
            console.log(error);
        },
    });
};
const fetchLike = async () => {
    const response = await api.get("/like");
    console.log("Fetch like response:", response.data.data);
    return response.data.data;
};

export const useGetLike = () => {
    return useQuery({
        queryKey: ["like"],
        queryFn: fetchLike,
    });
};
