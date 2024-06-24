import React from "react";
import NewProductCarousel from "../../components/carousel/new/NewProductCarousel";
import HotProductCarousel from "../../components/carousel/hot/HotProductCarousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Title, Row, Col } from "./HomepageStyles";
import { useGetProduct } from "../../hooks/useGetProduct";

const Homepage = () => {
    const { data, isLoading, error, isError } = useGetProduct();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data: {error.message}</div>;

    return (
        <Container>
            <NewProductCarousel />
            <Title>Welcome to the Homepage</Title>
            {/* <HotProductCarousel /> */}
            <Row>
                {data?.map((product) => (
                    <Col key={product.sku}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Homepage;
