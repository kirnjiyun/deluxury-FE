import React from "react";
import CartCard from "../../components/CartCard/CartCard";
import { Container, Greeting } from "./CartpageStyles";
import { useSelector } from "react-redux";

export default function Cartpage() {
    const user = useSelector((state) => state.user.user.user);
    return (
        <Container>
            <Greeting>
                {user ? `${user.name}님의 장바구니 보기` : "장바구니 보기"}
            </Greeting>
            <CartCard />
        </Container>
    );
}
