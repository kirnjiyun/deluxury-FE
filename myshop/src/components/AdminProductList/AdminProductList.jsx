import React, { useState, useEffect, useCallback } from "react";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import { ProductListContainer } from "./AdminProductListStyles";
import { useGetProductAll } from "../../hooks/useGetProduct";
import { useUpdateProduct } from "../../hooks/useGetProduct";
import { useDeleteProduct } from "../../hooks/useGetProduct";

export default function AdminProductList() {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useGetProductAll(page);
    const { mutate: updateProduct } = useUpdateProduct();
    const { mutate: deleteProduct } = useDeleteProduct();

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
        if (data && data.data) {
            if (page === 1) {
                setProducts(data.data.filter((product) => !product.isDeleted));
            } else {
                setProducts((prevProducts) => [
                    ...new Set([
                        ...prevProducts,
                        ...data.data.filter((product) => !product.isDeleted),
                    ]),
                ]);
            }
        }
    }, [data, page]);

    const handleEdit = (editedProduct) => {
        console.log("Editing product:", editedProduct);
        updateProduct({ id: editedProduct._id, product: editedProduct });
    };

    const handleDelete = (productId) => {
        deleteProduct(productId, {
            onSuccess: () => {
                setProducts((prevProducts) =>
                    prevProducts.filter((product) => product._id !== productId)
                );
            },
            onError: (error) => {
                console.error("Error deleting product:", error);
            },
        });
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching products</div>;

    return (
        <ProductListContainer>
            {products.length > 0 ? (
                products.map((product) => (
                    <AdminProductCard
                        key={product._id}
                        product={product}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))
            ) : (
                <div>No products available</div>
            )}
        </ProductListContainer>
    );
}
