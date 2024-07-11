import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchProductsAll = async ({ queryKey }) => {
    const [_, page] = queryKey;
    const response = await api.get(`/product/all`, {
        params: { page },
    });
    console.log("API response:", response.data);
    return response.data;
};

export const useGetProductAll = (page) => {
    return useQuery({
        queryKey: ["productAll", page],
        queryFn: () => fetchProductsAll({ queryKey: ["productAll", page] }),
        keepPreviousData: true,
    });
};
const fetchProducts = async ({ queryKey }) => {
    const [_, page] = queryKey;
    const response = await api.get(`/product`, {
        params: { page },
    });
    console.log("API response:", response.data);
    return response.data;
};

export const useGetProduct = (page) => {
    return useQuery({
        queryKey: ["products", page],
        queryFn: () => fetchProducts({ queryKey: ["products", page] }),
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
