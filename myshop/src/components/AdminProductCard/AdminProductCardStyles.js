import styled from "@emotion/styled";

export const ProductCard = styled.div`
    display: flex;
    border: 1px solid #ccc;
    overflow: hidden;
    margin: 16px;
    max-width: 300px;
    background-color: #fff;
`;

export const ProductImage = styled.img`
    width: 150px;
    height: auto;
    object-fit: cover;
`;

export const ProductInfo = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ProductName = styled.h2`
    font-size: 1.2em;
    margin: 0 0 8px;
`;

export const ProductBrand = styled.p`
    font-size: 0.9em;
    color: #555;
    margin: 0 0 8px;
`;

export const ProductCategory = styled.p`
    font-size: 0.9em;
    color: #555;
    margin: 0 0 8px;
`;

export const ProductPrice = styled.p`
    font-size: 1em;
    margin: 0;
    color: #000;
    font-weight: bold;
`;
