import styled from "@emotion/styled";

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const OrderItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #e9ecef;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;

export const OrderInfo = styled.div`
    margin-bottom: 10px;
`;

export const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OrderDetailItem = styled.div`
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.span`
    font-weight: bold;
    font-size: small;
    margin-right: 5px;
    margin-bottom: 5px;
`;

export const Value = styled.span`
    font-size: x-small;
`;
