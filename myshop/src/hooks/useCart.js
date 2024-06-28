import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../utils/api";
import { notify } from "../components/Toast/Toast";
import { addToCart } from "../action/cartAction";
import { useQuery } from "@tanstack/react-query";

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
            const addedItem = data.item;
            if (addedItem) {
                dispatch(addToCart(addedItem));
                notify(
                    `${addedItem.productId.name}, 사이즈${addedItem.size} 이(가) 카트에 추가됐습니다.`
                );
            } else {
                notify(`Item added to cart.`);
            }
        },
        onError: (error) => {
            const backendError = error.error || "An error occurred.";
            notify(` ${backendError}`);
        },
    });
};
const fetchCart = async () => {
    const response = await api.get("/cart");
    console.log("Fetch cart response:", response.data);
    return response.data.data;
};

export const useGetCart = () => {
    return useQuery({
        queryKey: ["cart"],
        queryFn: fetchCart,
    });
};
const deleteFromCartApi = async (id) => {
    const response = await api.delete(`/cart/${id}`);
    return response.data;
};

export const useDeleteFromCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteFromCartApi,
        onSuccess: () => {
            queryClient.invalidateQueries("cart");
        },
    });
};
