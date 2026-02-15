import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import NewProductCarousel from '../../components/carousel/new/NewProductCarousel';
import PageLayout from '../../components/layout/PageLayout';
import EmptyState from '../../components/ui/EmptyState';
import { useGetProductAll } from '../../hooks/useGetProduct';
import { setCategories } from '../../action/categoryAction';
import { Container, Row, Col } from './productpageStyles';

function filterProducts(products, bigCategory, mainCategory, subCategory) {
  if (!Array.isArray(products)) return [];
  const bc = (bigCategory || '').toLowerCase();
  const mc = (mainCategory || '').toLowerCase();
  const sc = (subCategory || '').toLowerCase();
  return products.filter((product) => {
    const matchBig = product?.bigCategory?.toLowerCase() === bc;
    const matchMain = product?.category?.main?.toLowerCase() === mc;
    const matchSub = !sc || product?.category?.sub?.toLowerCase() === sc;
    return matchBig && matchMain && matchSub;
  });
}

export default function Productpage() {
  const { bigCategory, mainCategory, subCategory } = useParams();
  const { data: response, isLoading, error } = useGetProductAll();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories({ bigCategory, mainCategory, subCategory }));
  }, [bigCategory, mainCategory, subCategory, dispatch]);

  const filteredProducts = useMemo(
    () => filterProducts(response?.data, bigCategory, mainCategory, subCategory),
    [response?.data, bigCategory, mainCategory, subCategory]
  );

  return (
    <PageLayout
      isLoading={isLoading}
      error={error?.message || error?.error}
      onRetry={() => window.location.reload()}
    >
      <Container>
        <NewProductCarousel />
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Col key={product.sku || product._id}>
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            !isLoading && (
              <EmptyState message="해당 카테고리의 제품이 없습니다." />
            )
          )}
        </Row>
      </Container>
    </PageLayout>
  );
}
