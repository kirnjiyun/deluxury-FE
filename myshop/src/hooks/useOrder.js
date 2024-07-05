import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
            navigate("/payment/success");
        },
        onError: (error) => {
            const backendError =
                error.response?.data?.message || "An error occurred.";
            notify(backendError);
        },
    });
};
const fetchOrder = async () => {
    const response = await api.get("/order");
    console.log("Fetch Order response:", response.data);
    return response.data.data;
};

export const useGetOrder = () => {
    return useQuery({
        queryKey: ["Order"],
        queryFn: fetchOrder,
    });
};
