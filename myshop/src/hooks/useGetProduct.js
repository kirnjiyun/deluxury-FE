import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchProducts = async ({ queryKey }) => {
    const [_, page] = queryKey;
    const response = await api.get(`/product/all`, {
        params: { page },
    });
    console.log("API response:", response.data);
    return response.data;
};

export const useGetProduct = (page) => {
    return useQuery({
        queryKey: ["productAll", page],
        queryFn: () => fetchProducts({ queryKey: ["productAll", page] }),
        keepPreviousData: true,
    });
};

const fetchProductById = async (id) => {
    const response = await api.get(`/product/${id}`);
    return response.data.data;
};

export const useGetOneProduct = (id) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(id),
    });
};
const addProductApi = async (product) => {
    const response = await api.post("/product", product);
    return response.data;
};

export const useAddProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addProductApi,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["productAll"]);
        },
    });
};
