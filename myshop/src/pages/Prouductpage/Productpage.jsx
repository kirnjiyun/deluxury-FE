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
        return products.filter((product) => {
            const matchesBigCategory =
                product.bigCategory.toLowerCase() === bigCategory.toLowerCase();
            const matchesMainCategory =
                product.category.main.toLowerCase() ===
                mainCategory.toLowerCase();
            const matchesSubCategory = subCategory
                ? product.category.sub.toLowerCase() ===
                  subCategory.toLowerCase()
                : true;

            return (
                matchesBigCategory && matchesMainCategory && matchesSubCategory
            );
        });
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products {error}</div>;

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
                {filteredProducts.length > 0 ? (
                    filteredProducts?.map((product) => (
                        <Col key={product.sku}>
                            <ProductCard product={product} />
                        </Col>
                    ))
                ) : (
                    <div>해당 제품은 준비중입니다.</div>
                )}
            </Row>
        </Container>
    );
}
