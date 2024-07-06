import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { notify } from "../components/Toast/Toast";
import { useQuery } from "@tanstack/react-query";

const addToOrderApi = async (order) => {
    const response = await api.post("/order", order);
    return response.data;
};

export const useAddToOrder = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: addToOrderApi,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["Order"]);
            navigate(`/payment/success?orderNum=${data.orderNum}`);
        },
        onError: (error) => {
            const backendError =
                error.response?.data?.message || "An error occurred.";
            notify(backendError);
        },
    });
};
const fetchOrders = async ({ queryKey }) => {
    const [_, page] = queryKey;
    const response = await api.get(`/order`, {
        params: { page },
    });
    return response.data;
};

export const useGetOrder = (page) => {
    return useQuery({
        queryKey: ["Order", page],
        queryFn: fetchOrders,
        keepPreviousData: true,
    });
};
const fetchOrderById = async (orderNum) => {
    const response = await api.get(`/order/${orderNum}`);
    return response.data.data;
};

export const useGetOrderById = (orderNum) => {
    return useQuery({
        queryKey: ["order", orderNum],
        queryFn: () => fetchOrderById(orderNum),
        enabled: !!orderNum,
    });
};

const fetchMyOrders = async ({ queryKey }) => {
    const [, page] = queryKey;
    const response = await api.get(`/order/me?page=${page}`);
    console.log("fetchOrder", response.data);
    return response.data;
};

export const useGetMyOrder = (page) => {
    return useQuery({
        queryKey: ["MyOrder", page],
        queryFn: fetchMyOrders,
        keepPreviousData: true,
    });
};
