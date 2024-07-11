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
        console.log(`handleChange - ${name}: ${value}`);
    };

    const handleStockChange = (e, size) => {
        const { value } = e.target;
        setEditedProduct((prevProduct) => ({
            ...prevProduct,
            stock: {
                ...prevProduct.stock,
                [size]: value,
            },
        }));
        console.log(`handleStockChange - ${size}: ${value}`);
    };

    const handleEditClick = () => {
        setIsEditing(true);
        console.log("Edit button clicked");
    };

    const handleSaveClick = () => {
        console.log("Save button clicked", editedProduct); // 콘솔 로그 추가
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
                            Brand:
                            <input
                                type="text"
                                name="brand"
                                value={editedProduct.brand}
                                onChange={handleChange}
                            />
                        </ProductBrand>
                        <ProductName>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={editedProduct.name}
                                onChange={handleChange}
                            />
                        </ProductName>
                        <ProductCategory>
                            Category:
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
                            Description:
                            <input
                                type="text"
                                name="description"
                                value={editedProduct.description}
                                onChange={handleChange}
                            />
                        </ProductDescription>
                        <ProductPrice>
                            Price: $
                            <input
                                type="number"
                                name="price"
                                value={editedProduct.price}
                                onChange={handleChange}
                            />
                        </ProductPrice>
                        <ProductColor>
                            Color:
                            <input
                                type="text"
                                name="color"
                                value={editedProduct.color}
                                onChange={handleChange}
                            />
                        </ProductColor>
                        <ProductStatus>
                            Status:
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
                            <Button onClick={handleSaveClick}>
                                수정 완료하기
                            </Button>
                        </ProductButtons>
                    </>
                ) : (
                    <>
                        <ProductBrand>Brand: {product.brand}</ProductBrand>
                        <ProductName>Name: {product.name}</ProductName>
                        <ProductCategory>
                            Category: {product.category.main} -{" "}
                            {product.category.sub}
                        </ProductCategory>
                        <ProductDescription>
                            Description: {product.description}
                        </ProductDescription>
                        <ProductPrice>Price: ${product.price}</ProductPrice>
                        <ProductColor>Color: {product.color}</ProductColor>
                        <ProductStatus>Status: {product.status}</ProductStatus>
                        <ProductStock>
                            <label>재고:</label>
                            {Object.keys(product.stock).map((size) => (
                                <div key={size}>
                                    <label>{size}:</label>
                                    <p>{product.stock[size]}</p>
                                </div>
                            ))}
                        </ProductStock>
                        <ProductButtons>
                            <Button onClick={handleEditClick}>수정하기</Button>
                            <Button onClick={() => onDelete(product._id)}>
                                삭제하기
                            </Button>
                        </ProductButtons>
                    </>
                )}
            </ProductInfo>
        </ProductCard>
    );
};

export default AdminProductCard;
