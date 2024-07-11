import React from "react";
import {
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductBrand,
    ProductCategory,
    ProductPrice,
    ProductDescription,
    ProductStock,
    ProductColor,
    ProductStatus,
    ProductButtons,
    Button,
} from "./AdminProductCardStyles";

export default function AdminProductCard({ product, onEdit, onDelete }) {
    return (
        <ProductCard>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
                {" "}
                <ProductButtons>
                    <Button onClick={() => onEdit(product)}>수정하기</Button>
                    <Button onClick={() => onDelete(product._id)}>
                        삭제하기
                    </Button>
                </ProductButtons>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductName>{product.name}</ProductName>
                <ProductCategory>
                    {product.bigCategory} / {product.category.main} /{" "}
                    {product.category.sub}
                </ProductCategory>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductStock>
                    Stock:{" "}
                    {Object.entries(product.stock)
                        .map(([size, quantity]) => `${size}: ${quantity}`)
                        .join(", ")}
                </ProductStock>
                <ProductColor>Color: {product.color}</ProductColor>
                <ProductStatus>Status: {product.status}</ProductStatus>
            </ProductInfo>
        </ProductCard>
    );
}
