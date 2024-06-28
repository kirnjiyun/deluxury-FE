import styled from "@emotion/styled";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #e0e0e0;
    position: relative;
`;

export const ItemDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ItemInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ItemName = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

export const ItemBrand = styled.p`
    font-size: 14px;
    color: #555;
`;

export const ItemPrice = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    color: #000;
    margin-right: 30px;
`;

export const ItemSize = styled.p`
    font-size: 14px;
    color: #888;
`;

export const ItemImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
`;

export const QuantityControls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const QuantityButton = styled.button`
    padding: 5px 10px;
    margin: 0 5px;
    background-color: #ddd;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #ccc;
    }
`;

export const QuantityDisplay = styled.span`
    padding: 5px 10px;
    font-size: 14px;
`;

export const RemoveButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
`;
