import React, { useState, useEffect } from "react";
import {
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductBrand,
    ProductName,
    ProductCategory,
    ProductDescription,
    ProductPrice,
    ProductStock,
    ProductColor,
    ProductStatus,
    ProductButtons,
    Button,
} from "./AdminProductCardStyles";

const AdminProductCard = ({ product, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    useEffect(() => {
        setEditedProduct(product);
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleStockChange = (e, size) => {
        const { value } = e.target;
        const newStockValue = Math.max(0, value);

        setEditedProduct((prevProduct) => ({
            ...prevProduct,
            stock: {
                ...prevProduct.stock,
                [size]: newStockValue,
            },
        }));
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(editedProduct);
        setIsEditing(false);
    };

    return (
        <ProductCard>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
                {isEditing ? (
                    <>
                        <ProductBrand>
                            브랜드:
                            <input
                                type="text"
                                name="brand"
                                value={editedProduct.brand}
                                onChange={handleChange}
                            />
                        </ProductBrand>
                        <ProductName>
                            상품명:
                            <input
                                type="text"
                                name="name"
                                value={editedProduct.name}
                                onChange={handleChange}
                            />
                        </ProductName>
                        <ProductCategory>
                            카테고리:
                            <input
                                type="text"
                                name="mainCategory"
                                value={editedProduct.category.main}
                                onChange={(e) =>
                                    setEditedProduct((prevProduct) => ({
                                        ...prevProduct,
                                        category: {
                                            ...prevProduct.category,
                                            main: e.target.value,
                                        },
                                    }))
                                }
                            />
                            -
                            <input
                                type="text"
                                name="subCategory"
                                value={editedProduct.category.sub}
                                onChange={(e) =>
                                    setEditedProduct((prevProduct) => ({
                                        ...prevProduct,
                                        category: {
                                            ...prevProduct.category,
                                            sub: e.target.value,
                                        },
                                    }))
                                }
                            />
                        </ProductCategory>
                        <ProductDescription>
                            설명:
                            <input
                                type="text"
                                name="description"
                                value={editedProduct.description}
                                onChange={handleChange}
                            />
                        </ProductDescription>
                        <ProductPrice>
                            가격: $
                            <input
                                type="number"
                                name="price"
                                value={editedProduct.price}
                                onChange={handleChange}
                            />
                        </ProductPrice>
                        <ProductColor>
                            색상:
                            <input
                                type="text"
                                name="color"
                                value={editedProduct.color}
                                onChange={handleChange}
                            />
                        </ProductColor>
                        <ProductStatus>
                            상태:
                            <input
                                type="text"
                                name="status"
                                value={editedProduct.status}
                                onChange={handleChange}
                            />
                        </ProductStatus>
                        <ProductStock>
                            <label>재고:</label>
                            {Object.keys(editedProduct.stock).map((size) => (
                                <div key={size}>
                                    <label>{size}:</label>
                                    <input
                                        type="number"
                                        value={editedProduct.stock[size]}
                                        onChange={(e) =>
                                            handleStockChange(e, size)
                                        }
                                    />
                                </div>
                            ))}
                        </ProductStock>
                        <ProductButtons>
                            <Button onClick={handleSaveClick}>저장</Button>
                        </ProductButtons>
                    </>
                ) : (
                    <>
                        <ProductBrand>브랜드: {product.brand}</ProductBrand>
                        <ProductName>상품명: {product.name}</ProductName>
                        <ProductCategory>
                            카테고리: {product.category.main} -{" "}
                            {product.category.sub}
                        </ProductCategory>
                        <ProductDescription>
                            설명: {product.description}
                        </ProductDescription>
                        <ProductPrice>가격: ${product.price}</ProductPrice>
                        <ProductColor>색상: {product.color}</ProductColor>
                        <ProductStatus>상태: {product.status}</ProductStatus>
                        <ProductStock>
                            <label>재고:</label>
                            {Object.keys(product.stock)
                                .filter((size) => product.stock[size] > 0)
                                .map((size) => (
                                    <div key={size}>
                                        <label>{size}:</label>
                                        <p>{product.stock[size]}</p>
                                    </div>
                                ))}
                        </ProductStock>
                        <ProductButtons>
                            <Button onClick={handleEditClick}>수정</Button>
                            <Button onClick={() => onDelete(product._id)}>
                                삭제
                            </Button>
                        </ProductButtons>
                    </>
                )}
            </ProductInfo>
        </ProductCard>
    );
};

export default AdminProductCard;
