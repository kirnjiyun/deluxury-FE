import React from "react";
import CartCard from "../../components/CartCard/CartCard";
import { Container, Greeting } from "./CartpageStyles";
import { useSelector } from "react-redux";
import { useGetCart } from "../../hooks/useCart";

export default function Cartpage() {
    const user = useSelector((state) => state.user.user);
    const { data, error, isLoading } = useGetCart();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading cart data</div>;
    }

    return (
        <Container>
            <Greeting>
                {user ? `${user.user.name}님의 장바구니` : "장바구니"}
            </Greeting>
            {data && data.length > 0 ? (
                data.map((item) => (
                    <CartCard key={item.productId._id} item={item} />
                ))
            ) : (
                <div>장바구니가 비어 있습니다.</div>
            )}
        </Container>
    );
}
