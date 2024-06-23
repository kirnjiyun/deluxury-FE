import React from "react";
import { Container, Title } from "./HomepageStyles";
import NewProductCarousel from "../../components/carousel/new/NewProductCarousel";
import HotProductCarousel from "../../components/carousel/hot/HotProductCarousel";
const Homepage = () => {
    return (
        <Container>
            <NewProductCarousel />
            <Title>Welcome to the Homepage</Title>
            <HotProductCarousel />
        </Container>
    );
};

export default Homepage;
