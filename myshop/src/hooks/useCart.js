import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../utils/api";
import { notify } from "../components/Toast/Toast";
import { addToCart } from "../action/cartAction";

const addToCartApi = async (item) => {
    const response = await api.post("/cart", item);
    return response.data;
};
export const useAddToCart = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: addToCartApi,
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            dispatch(addToCart(data.item));
            if (data && data.item) {
                notify(`${data.item.name} 가(이) 카트에 추가됐습니다.`);
            } else {
                console.error("Unexpected success response structure:", data); // 데
                notify(`Item added to cart.`);
            }
        },
        onError: (error) => {
            const backendError = error || "An error occurred.";
            notify(`Error: ${backendError}`);
        },
    });
};
