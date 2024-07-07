import React, { useState, useEffect, useCallback } from "react";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import { ProductListContainer } from "./AdminProductListStyles";
import { useGetProduct } from "../../hooks/useGetProduct";

export default function AdminProductList() {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useGetProduct(page);

    const [products, setProducts] = useState([]);

    const loadMoreProducts = useCallback(() => {
        if (data && data.data && data.data.length > 0) {
            setProducts((prevProducts) => [
                ...new Set([...prevProducts, ...data.data]),
            ]);
            setPage((prevPage) => prevPage + 1);
        }
    }, [data]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (windowHeight + scrollTop >= documentHeight - 10) {
                loadMoreProducts();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loadMoreProducts]);

    useEffect(() => {
        if (data && data.data) {
            if (page === 1) {
                setProducts(data.data);
            } else {
                setProducts((prevProducts) => [
                    ...new Set([...prevProducts, ...data.data]),
                ]);
            }
        }
    }, [data, page]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching products</div>;

    return (
        <ProductListContainer>
            {products.length > 0 ? (
                products.map((product) => (
                    <AdminProductCard key={product._id} product={product} />
                ))
            ) : (
                <div>No products available</div>
            )}
        </ProductListContainer>
    );
}
