import React from "react";
import { Container, Row, Col } from "./mylikepageStyles";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetLike } from "../../hooks/useLike";

export default function Mylikepage() {
    const { data: products, isLoading, error } = useGetLike();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products: {error.message}</div>;

    return (
        <Container>
            <Row>
                {products.length > 0 ? (
                    products.map((item) => {
                        console.log("Item productId:", item.productId._id);
                        return (
                            <Col key={item.productId._id}>
                                <ProductCard product={item.productId} />
                            </Col>
                        );
                    })
                ) : (
                    <div>찜한 상품이 없습니다.</div>
                )}
            </Row>
        </Container>
    );
}
