import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Row, Col } from "./productpageStyles";
import NewProductCarousel from "../../components/carousel/new/NewProductCarousel";
import { useGetProduct } from "../../hooks/useGetProduct";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Productpage() {
    const { bigCategory, mainCategory, subCategory } = useParams();
    const { data: products, isLoading, error } = useGetProduct();
    const category = useSelector((state) => state.category.category);

    function filterProducts(products, bigCategory, mainCategory, subCategory) {
        return products.filter(
            (product) =>
                product.bigCategory.toLowerCase() ===
                    bigCategory.toLowerCase() &&
                product.category.main.toLowerCase() ===
                    mainCategory.toLowerCase() &&
                product.category.sub.toLowerCase() === subCategory.toLowerCase()
        );
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const filteredProducts = filterProducts(
        products,
        bigCategory,
        mainCategory,
        subCategory
    );

    console.log("URL Parameters:", { bigCategory, mainCategory, subCategory });
    console.log("Products Data:", products);
    console.log("Redux Category:", category);
    console.log("Filtered Products:", filteredProducts);

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
