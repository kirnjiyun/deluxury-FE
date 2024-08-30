import styled from "@emotion/styled";

export const ProductCard = styled.div`
    border: 1px solid #ddd;
    overflow: hidden;
    margin: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ProductImage = styled.img`
    width: 100%;
    height: auto;
`;

export const ProductInfo = styled.div`
    padding: 16px;
`;

export const ProductBrand = styled.div`
    font-size: 1.2em;
    font-weight: bold;
`;

export const ProductName = styled.div`
    font-size: 1.1em;
    margin: 8px 0;
`;

export const ProductCategory = styled.div`
    margin: 4px 0;
`;

export const ProductDescription = styled.div`
    margin: 8px 0;
`;

export const ProductPrice = styled.div`
    margin: 8px 0;
    font-size: 1.2em;
    color: #333;
`;

export const ProductStock = styled.div`
    margin: 8px 0;
`;

export const ProductColor = styled.div`
    margin: 4px 0;
`;

export const ProductStatus = styled.div`
    margin: 4px 0;
`;

export const ProductButtons = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    background: #333;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    &:hover {
        background: black;
    }
`;
