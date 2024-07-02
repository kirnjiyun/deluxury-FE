import React, { useEffect, useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { Container, ButtonContainer, Button } from "./CartpageStyles";
import { useSelector } from "react-redux";
import { useGetCart } from "../../hooks/useCart";
import CartSummary from "../../components/CartSummary/CartSummary";

export default function Cartpage() {
    const user = useSelector((state) => state.user.user);
    const { data, error, isLoading } = useGetCart();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (data) {
            setCartItems(data);
        }
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading cart data</div>;
    }

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.productId._id === id ? { ...item, qty: newQuantity } : item
            )
        );
    };

    const totalAmount = cartItems
        .reduce((sum, item) => sum + item.productId.price * item.qty, 0)
        .toFixed(2);
    const totalShipping = cartItems.length > 0 ? 0 : 0;
    const totalPayment = (parseFloat(totalAmount) + totalShipping).toFixed(2);
    console.log(user);
    return (
        <Container>
            {cartItems && cartItems.length > 0 ? (
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
                    />{" "}
                    <ButtonContainer>
                        {" "}
                        <Button>계속 쇼핑하기</Button>
                        <Button>결제 하기</Button>
                    </ButtonContainer>
                </>
            ) : (
                <div>장바구니가 비어 있습니다.</div>
            )}
        </Container>
    );
}
