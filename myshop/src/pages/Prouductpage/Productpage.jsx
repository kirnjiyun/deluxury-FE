import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Row, Col } from "./productpageStyles";
import NewProductCarousel from "../../components/carousel/new/NewProductCarousel";
import { useGetProduct } from "../../hooks/useGetProduct";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Productpage() {
    const { bigCategory, subCategory } = useParams(); // URL에서 파라미터를 가져옴
    const { data: products, isLoading, error } = useGetProduct();
    const category = useSelector((state) => state.category.category); // Redux 상태 사용

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const filteredProducts = products.filter((product) => {
        return (
            product.bigCategory.toLowerCase() === bigCategory.toLowerCase() &&
            (!subCategory ||
                product.category.sub.toLowerCase() ===
                    subCategory.toLowerCase())
        );
    });

    return (
        <Container>
            <NewProductCarousel />
            <Row>
                {filteredProducts.map((product) => (
                    <Col key={product.sku}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
