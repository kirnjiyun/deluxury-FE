import styled from "@emotion/styled";

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 240px;
    height: 300px;
    margin: 10px;
    padding: 10px;
    background-color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
    overflow: hidden;
    flex-wrap: wrap;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        background-color: white;

        img {
            opacity: 0.1;
        }

        .productName,
        .productPrice,
        .productBrand {
            opacity: 1;
            color: black;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 90%;
        }
    }
`;

export const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 2px;
    transition: opacity 0.2s;
`;

export const ProductInfo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ProductName = styled.div`
    opacity: 0;
    transition: opacity 0.2s;
    font-size: 1.2em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ProductPrice = styled.div`
    opacity: 0;
    transition: opacity 0.2s;
    font-size: 1em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
`;
export const ProductBrand = styled.div`
    opacity: 0;
    transition: opacity 0.2s;
    font-size: 0.8em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
`;
