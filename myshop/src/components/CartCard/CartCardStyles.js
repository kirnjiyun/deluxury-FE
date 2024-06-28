import styled from "@emotion/styled";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`;

const ItemDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemInfo = styled.div`
    flex: 1;
`;

const ItemName = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

const ItemPrice = styled.p`
    font-size: 14px;
    color: #888;
`;

const QuantityControls = styled.div`
    display: flex;
    align-items: center;
`;

const QuantityButton = styled.button`
    padding: 5px 10px;
    margin: 0 5px;
    background-color: #ddd;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #ccc;
    }
`;

const QuantityDisplay = styled.span`
    padding: 5px 10px;
`;
export {
    Card,
    ItemDetails,
    ItemInfo,
    ItemName,
    ItemPrice,
    QuantityControls,
    QuantityButton,
    QuantityDisplay,
};
