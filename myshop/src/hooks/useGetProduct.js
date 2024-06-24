import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const fetchProductAll = async () => {
    const response = await api.get("/product");
    return response.data.data;
};
export const useGetProduct = () => {
    return useQuery({
        queryKey: ["productsAll"],
        queryFn: fetchProductAll,
    });
};
