import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartCard from '../../components/CartCard/CartCard';
import CartSummary from '../../components/CartSummary/CartSummary';
import PageLayout from '../../components/layout/PageLayout';
import EmptyState from '../../components/ui/EmptyState';
import { Button } from '../../components/ui/Button';
import { useGetCart } from '../../hooks/useCart';
import { ROUTES } from '../../constants';
import { Container, ButtonContainer } from './CartpageStyles';

export default function Cartpage() {
  const { data, error, isLoading } = useGetCart();
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) setCartItems(data);
  }, [data]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.productId._id === id ? { ...item, qty: newQuantity } : item))
    );
  };

  const totalAmount = (cartItems || [])
    .reduce((sum, item) => sum + item.productId.price * item.qty, 0)
    .toFixed(2);
  const totalShipping = (cartItems || []).length > 0 ? 0 : 0;
  const totalPayment = (parseFloat(totalAmount) + totalShipping).toFixed(2);

  return (
    <PageLayout
      isLoading={isLoading}
      error={error?.error || error?.message}
      onRetry={() => window.location.reload()}
    >
      <Container>
        {cartItems?.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartCard
                key={item.productId._id}
                item={item}
                onQuantityChange={handleQuantityChange}
              />
            ))}
            <CartSummary
              totalAmount={totalAmount}
              totalShipping={totalShipping}
              totalPayment={totalPayment}
            />
            <ButtonContainer>
              <Button variant="secondary" onClick={() => navigate(ROUTES.HOME)}>
                계속 쇼핑하기
              </Button>
              <Button variant="primary" onClick={() => navigate(ROUTES.PAYMENT)}>
                결제하기
              </Button>
            </ButtonContainer>
          </>
        ) : (
          !isLoading && (
            <EmptyState
              message="장바구니가 비어 있습니다."
              actionLabel="쇼핑하러 가기"
              onAction={() => navigate(ROUTES.HOME)}
            />
          )
        )}
      </Container>
    </PageLayout>
  );
}
