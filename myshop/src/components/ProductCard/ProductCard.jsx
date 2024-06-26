import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {
    Card,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductPrice,
    ProductBrand,
} from "./productCardStyles";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { bigCategory, mainCategory, subCategory } = useSelector(
        (state) => state.category
    );

    const showProduct = (id) => {
        navigate(`/${bigCategory}/${mainCategory}/${subCategory}/${id}`);
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
                </ProductPrice>{" "}
                <ProductBrand className="productBrand">
                    {product.brand}
                </ProductBrand>
            </ProductInfo>
        </Card>
    );
};

export default ProductCard;
