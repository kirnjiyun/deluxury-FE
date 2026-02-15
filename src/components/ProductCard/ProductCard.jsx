import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductDetailPath } from '../../constants';
import {
  Card,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductBrand,
} from './productCardStyles';

/**
 * 상품 카드 - 그리드/리스트에서 사용. 클릭 시 상품 상세로 이동.
 */
function ProductCard({ product }) {
  const navigate = useNavigate();
  const { bigCategory, mainCategory, subCategory } = useSelector((state) => state.category);
  const bc = bigCategory || product.bigCategory;
  const mc = mainCategory || product.category?.main;
  const sc = subCategory || product.category?.sub;
  const path = getProductDetailPath(
    (bc || '').toLowerCase(),
    (mc || '').toLowerCase(),
    (sc || '').toLowerCase(),
    product._id
  );

  const handleClick = () => navigate(path);

  return (
    <Card onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleClick()}>
      <ProductImage src={product.image} alt={product.name} loading="lazy" />
      <ProductInfo>
        <ProductName className="productName">{product.name}</ProductName>
        <ProductPrice className="productPrice">${product.price}</ProductPrice>
        <ProductBrand className="productBrand">{product.brand}</ProductBrand>
      </ProductInfo>
    </Card>
  );
}

export default ProductCard;
