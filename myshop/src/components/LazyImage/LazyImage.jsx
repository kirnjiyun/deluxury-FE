import React from "react";
import styled from "@emotion/styled";

const ImageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const LazyImage = ({ src, alt }) => (
    <ImageContainer>
        <StyledImage src={src} alt={alt} />
    </ImageContainer>
);

export default LazyImage;
