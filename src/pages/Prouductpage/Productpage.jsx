import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Row, Col } from "./productpageStyles";
import NewProductCarousel from "../../components/carousel/new/NewProductCarousel";
import { useGetProductAll } from "../../hooks/useGetProduct";
import { setCategories } from "../../action/categoryAction";

export default function Productpage() {
    const { bigCategory, mainCategory, subCategory } = useParams();
    const { data: response, isLoading, error } = useGetProductAll();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(setCategories({ bigCategory, mainCategory, subCategory }));
    }, [bigCategory, mainCategory, subCategory, dispatch]);

    function filterProducts(products, bigCategory, mainCategory, subCategory) {
        if (!Array.isArray(products)) return [];

        return products.filter((product) => {
            const matchesBigCategory =
                product?.bigCategory?.toLowerCase() ===
                bigCategory.toLowerCase();
            const matchesMainCategory =
                product?.category?.main?.toLowerCase() ===
                mainCategory.toLowerCase();
            const matchesSubCategory = subCategory
                ? product?.category?.sub?.toLowerCase() ===
                  subCategory.toLowerCase()
                : true;
            return (
                matchesBigCategory && matchesMainCategory && matchesSubCategory
            );
        });
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products: {error}</div>;

    const filteredProducts = filterProducts(
        response?.data,
        bigCategory,
        mainCategory,
        subCategory
    );

    return (
        <Container>
            <NewProductCarousel />
            <Row>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
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
