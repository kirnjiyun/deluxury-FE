import React from "react";
import {
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductBrand,
    ProductCategory,
    ProductPrice,
} from "./AdminProductCardStyles";

export default function AdminProductCard({ product }) {
    return (
        <ProductCard>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductName>{product.name}</ProductName>
                <ProductCategory>{product.bigCategory}</ProductCategory>
                <ProductPrice>${product.price}</ProductPrice>
            </ProductInfo>
        </ProductCard>
    );
}
