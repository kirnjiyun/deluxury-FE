import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notify } from "../components/Toast/Toast";
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

const updateProductStatusApi = async ({ id, product }) => {
    console.log("Sending update request to backend:", { id, product }); // 콘솔 로그 추가
    const response = await api.put(`/product/${id}`, product); // product를 직접 전송
    return response.data.data;
};

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProductStatusApi,
        onSuccess: (data) => {
            console.log("Update successful:", data); // 콘솔 로그 추가
            queryClient.invalidateQueries(["products"]); // products 키를 사용하여 쿼리 무효화
            notify("상품 상태 변경 완료");
        },
        onError: (error) => {
            const backendError =
                error.response?.data?.message || "An error occurred.";
            console.log("Update failed:", backendError);
            notify(backendError);
        },
    });
};
const deleteProduct = async (productId) => {
    const response = await api.delete(`/product/${productId}`);
    return response.data;
};

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries("productAll");
            notify("상품 삭제 완료");
        },
        onError: (error) => {
            const backendError = error || "An error occurred.";
            console.log("Delte failed:", backendError);
            notify(backendError);
        },
    });
};
