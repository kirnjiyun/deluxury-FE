/**
 * 라우트 경로 상수 - 오타 방지 및 단일 진입점
 */
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  CART: '/cart',
  MY_LIKE: '/mylike',
  PAYMENT: '/payment',
  PAYMENT_SUCCESS: '/payment/success',
  LOGIN: '/login',
  SIGNUP: '/signup',
  MY_PAGE: '/me',
  ADMIN: '/admin',
  NOT_FOUND: '/404',
};

/**
 * 상품 상세 경로 생성 (subCategory 없으면 'all' 사용)
 */
export const getProductDetailPath = (bigCategory, mainCategory, subCategory, productId) => {
  const sub = subCategory || 'all';
  return `/${bigCategory}/${mainCategory}/${sub}/${productId}`;
};

/**
 * 카테고리 목록 경로 생성
 */
export const getCategoryPath = (bigCategory, mainCategory, subCategory) => {
  const base = `/${bigCategory}/${mainCategory || ''}`.replace(/\/$/, '');
  return subCategory ? `${base}/${subCategory}` : base;
};
