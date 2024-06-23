import React from "react";
import NewProductCarousel from "../../components/carousel/new/NewProductCarousel";
import HotProductCarousel from "../../components/carousel/hot/HotProductCarousel";
import hardcodedProductCard from "../../components/ProductCard/hardCodedProductCards";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Title, Row, Col } from "./HomepageStyles";
const Homepage = () => {
    return (
        <Container>
            <NewProductCarousel />
            <Title>Welcome to the Homepage</Title>
            {/* <HotProductCarousel /> */}
            <Row>
                {hardcodedProductCard.map((product) => (
                    <Col key={product.sku}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Homepage;
