import React, { useState } from "react";
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
} from "./ProductModalStyles";
import { categories } from "./categories";

Modal.setAppElement("#root"); // root element 설정

const ProductModal = ({ isOpen, onRequestClose }) => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [mainCategory, setMainCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [subSubCategory, setSubSubCategory] = useState("");
    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "your-upload-preset"); // 실제 업로드 프리셋을 사용하세요

        try {
            const res = await fetch(
                `https://api.cloudinary.com/v1_1/dkem8p6du/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await res.json();
            setImage(data.secure_url);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
        setImage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 폼 제출 로직을 추가하세요
        console.log("Product Name:", productName);
        console.log("Product Price:", productPrice);
        console.log("Product Description:", productDescription);
        console.log("Category:", mainCategory);
        console.log("Sub Category:", subCategory);
        console.log("Sub Sub Category:", subSubCategory);
        console.log("Image URL:", image);
        // 제출 후 폼 초기화 및 모달 닫기
        setProductName("");
        setProductPrice("");
        setProductDescription("");
        setMainCategory("");
        setSubCategory("");
        setSubSubCategory("");
        setImage("");
        setImageUrl("");
        onRequestClose();
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
                        <Label>상품명:</Label>
                        <Input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </FormGroup>
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
                        <Label>카테고리:</Label>
                        <Select
                            value={mainCategory}
                            onChange={(e) => setMainCategory(e.target.value)}
                        >
                            <option value="">Select a category</option>
                            {Object.keys(categories).map((key) => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </Select>
                    </FormGroup>
                    {mainCategory && (
                        <FormGroup>
                            <Label>서브 카테고리:</Label>
                            <Select
                                value={subCategory}
                                onChange={(e) => setSubCategory(e.target.value)}
                            >
                                <option value="">Select a subcategory</option>
                                {Object.keys(categories[mainCategory]).map(
                                    (key) => (
                                        <option key={key} value={key}>
                                            {key}
                                        </option>
                                    )
                                )}
                            </Select>
                        </FormGroup>
                    )}
                    {subCategory && (
                        <FormGroup>
                            <Label>서브 서브 카테고리:</Label>
                            <Select
                                value={subSubCategory}
                                onChange={(e) =>
                                    setSubSubCategory(e.target.value)
                                }
                            >
                                <option value="">
                                    Select a subsubcategory
                                </option>
                                {categories[mainCategory][subCategory].map(
                                    (item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    )
                                )}
                            </Select>
                        </FormGroup>
                    )}
                    <FormGroup>
                        <Label>이미지:</Label>
                        <Input type="file" onChange={handleImageUpload} />
                        <Label>또는 이미지 URL:</Label>
                        <Input
                            type="text"
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                        />
                        {image && (
                            <img
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
