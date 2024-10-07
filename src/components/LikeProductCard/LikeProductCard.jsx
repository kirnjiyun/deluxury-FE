import React from "react";
import { useNavigate } from "react-router";
import {
    Card,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductPrice,
    ProductBrand,
} from "./LikeProductCardStyles";

const LikeProductCard = ({
    product,
    bigCategory,
    mainCategory,
    subCategory,
}) => {
    const navigate = useNavigate();

    const lowerBigCategory = bigCategory.toLowerCase();
    const lowerMainCategory = mainCategory.toLowerCase();
    const lowerSubCategory = subCategory.toLowerCase();

    const showProduct = (id) => {
        navigate(
            `/${lowerBigCategory}/${lowerMainCategory}/${lowerSubCategory}/${id}`
        );
        console.log("Product ID:", id);
    };

    return (
        <Card onClick={() => showProduct(product._id)}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
                <ProductName className="productName">
                    {product.name}
                </ProductName>
                <ProductPrice className="productPrice">
                    ${product.price}
                </ProductPrice>
                <ProductBrand className="productBrand">
                    {product.brand}
                </ProductBrand>
            </ProductInfo>
        </Card>
    );
};

export default LikeProductCard;
