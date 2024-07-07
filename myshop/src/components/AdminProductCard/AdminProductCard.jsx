import React from "react";
import {
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductPrice,
} from "./AdminProductCardStyles";

export default function AdminProductCard({ product }) {
    return (
        <ProductCard>
            <ProductImage src={product?.image} alt={product?.name} />
            <ProductInfo>
                <ProductName>{product?.name}</ProductName>
                <ProductPrice>${product?.price}</ProductPrice>
            </ProductInfo>
        </ProductCard>
    );
}
