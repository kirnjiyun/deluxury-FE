import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
    ModalContainer,
    CloseButton,
    Form,
    FormGroup,
    Label,
    Input,
    Textarea,
    Select,
    Button,
    ErrorText,
} from "./ProductModalStyles";
import { brandCategories, categories } from "./categories";
import { useAddProduct } from "../../hooks/useGetProduct";
import CloudinaryUploadWidget from "../../components/CloudinaryUploadWidget/CloudinaryUploadWidget";

Modal.setAppElement("#root");

const ProductModal = ({ isOpen, onRequestClose, notify }) => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [bigCategory, setBigCategory] = useState("");
    const [mainCategory, setMainCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [subSubCategory, setSubSubCategory] = useState("");
    const [image, setImage] = useState("");
    const [sku, setSku] = useState("");
    const [color, setColor] = useState("");
    const [status, setStatus] = useState("active");
    const [stock, setStock] = useState([]);
    const [errors, setErrors] = useState({});

    const mutation = useAddProduct();

    const handleImageUpload = (url) => {
        setImage(url);
    };

    const handleImageUrlChange = (e) => {
        setImage(e.target.value);
    };

    useEffect(() => {
        if (mainCategory === "clothes") {
            setStock(
                ["XS", "S", "M", "L", "XL"].map((size) => ({
                    size,
                    quantity: 0,
                }))
            );
        } else if (mainCategory === "bags" || mainCategory === "accessories") {
            setStock([{ size: "Free", quantity: 0 }]);
        } else if (mainCategory === "shoes") {
            setStock(
                ["220", "230", "240", "250", "260", "270", "280", "290"].map(
                    (size) => ({ size, quantity: 0 })
                )
            );
        } else {
            setStock([]);
        }
    }, [mainCategory]);

    const handleStockChange = (index, quantity) => {
        const newStock = [...stock];
        const newErrors = { ...errors };

        if (quantity < 0) {
            newErrors[index] = "수량은 0 이상이어야합니다.";
        } else {
            delete newErrors[index];
            newStock[index].quantity = quantity;
        }

        setStock(newStock);
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !productName ||
            !productPrice ||
            !bigCategory ||
            !mainCategory ||
            !subCategory ||
            !image
        ) {
            alert("모든 필수 항목을 입력해 주세요.");
            return;
        }

        mutation.mutate(
            {
                sku,
                name: productName,
                brand,
                bigCategory,
                category: {
                    main: mainCategory,
                    sub: subCategory,
                    subSub: subSubCategory,
                },
                image,
                description: productDescription,
                price: parseFloat(productPrice), // 숫자로 변환
                stock: stock.reduce((acc, item) => {
                    acc[item.size] = item.quantity;
                    return acc;
                }, {}),
                color,
                status,
            },
            {
                onSuccess: () => {
                    setProductName("");
                    setProductPrice("");
                    setProductDescription("");
                    setBrand("");
                    setBigCategory("");
                    setMainCategory("");
                    setSubCategory("");
                    setSubSubCategory("");
                    setImage("");
                    setSku("");
                    setColor("");
                    setStatus("active");
                    setStock([]);
                    setErrors({});
                    onRequestClose();
                    notify("상품이 등록되었습니다.");
                },
                onError: (error) => {
                    console.error("Product creation failed:", error);
                },
            }
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Product Modal"
            style={{ overlay: { zIndex: 1000 } }}
        >
            <ModalContainer>
                <CloseButton onClick={onRequestClose}>×</CloseButton>
                <h2>상품 등록</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>SKU:</Label>
                        <Input
                            type="text"
                            value={sku}
                            onChange={(e) => setSku(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>상품명:</Label>
                        <Input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>브랜드:</Label>
                        <Select
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        >
                            <option value="">브랜드 선택</option>
                            {brandCategories.map((brand) => (
                                <option key={brand} value={brand}>
                                    {brand}
                                </option>
                            ))}
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label>대분류:</Label>
                        <Select
                            value={bigCategory}
                            onChange={(e) => setBigCategory(e.target.value)}
                        >
                            <option value="">대분류 선택</option>
                            {Object.keys(categories).map((main) => (
                                <option key={main} value={main}>
                                    {main}
                                </option>
                            ))}
                        </Select>
                    </FormGroup>
                    {bigCategory && (
                        <FormGroup>
                            <Label>중분류:</Label>
                            <Select
                                value={mainCategory}
                                onChange={(e) =>
                                    setMainCategory(e.target.value)
                                }
                            >
                                <option value="">중분류 선택</option>
                                {Object.keys(categories[bigCategory]).map(
                                    (sub) => (
                                        <option key={sub} value={sub}>
                                            {sub}
                                        </option>
                                    )
                                )}
                            </Select>
                        </FormGroup>
                    )}
                    {mainCategory && (
                        <FormGroup>
                            <Label>소분류:</Label>
                            <Select
                                value={subCategory}
                                onChange={(e) => setSubCategory(e.target.value)}
                            >
                                <option value="">소분류 선택</option>
                                {categories[bigCategory][mainCategory].map(
                                    (subSub) => (
                                        <option key={subSub} value={subSub}>
                                            {subSub}
                                        </option>
                                    )
                                )}
                            </Select>
                        </FormGroup>
                    )}
                    <FormGroup>
                        <Label>가격:</Label>
                        <Input
                            type="text"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>설명:</Label>
                        <Textarea
                            value={productDescription}
                            onChange={(e) =>
                                setProductDescription(e.target.value)
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>색상:</Label>
                        <Input
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>상태:</Label>
                        <Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label>재고:</Label>
                        {stock.map((stockItem, index) => (
                            <FormGroup key={stockItem.size}>
                                <Label>{stockItem.size}:</Label>
                                <Input
                                    type="number"
                                    value={stockItem.quantity}
                                    onChange={(e) =>
                                        handleStockChange(index, e.target.value)
                                    }
                                    style={{
                                        borderColor: errors[index]
                                            ? "red"
                                            : "initial",
                                    }}
                                />
                                {errors[index] && (
                                    <ErrorText>{errors[index]}</ErrorText>
                                )}
                            </FormGroup>
                        ))}
                    </FormGroup>
                    <FormGroup>
                        <Label>이미지 업로드 : </Label>
                        <CloudinaryUploadWidget
                            uploadImage={handleImageUpload}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>또는 이미지 URL:</Label>
                        <Input
                            type="text"
                            value={image}
                            onChange={handleImageUrlChange}
                        />
                        {image && (
                            <img
                                id="uploadedimage"
                                src={image}
                                alt="Product"
                                style={{ width: "100px", height: "100px" }}
                            />
                        )}
                    </FormGroup>
                    <Button type="submit">등록</Button>
                </Form>
            </ModalContainer>
        </Modal>
    );
};

export default ProductModal;
