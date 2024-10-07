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
                {products && products.length > 0 ? (
                    products.map((item) => (
                        <Col key={item.productId._id}>
                            {/* ProductCard에 제품 정보와 카테고리 정보 전달 */}
                            <ProductCard
                                product={item.productId}
                                bigCategory={item.productId.bigCategory}
                                mainCategory={item.productId.category.main}
                                subCategory={item.productId.category.sub}
                            />
                        </Col>
                    ))
                ) : (
                    <div>찜한 상품이 없습니다.</div>
                )}
            </Row>
        </Container>
    );
}
