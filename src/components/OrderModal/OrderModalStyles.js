import styled from "@emotion/styled";

export const ModalContent = styled.div`
    padding: 20px;
    background: white;
    border-radius: 8px;
    max-width: 600px;
    height: 70vh;
    margin: auto;
    position: relative;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    &:hover {
        color: #ff5a5f;
    }
`;

export const OrderDetailItem = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: row;
`;

export const Label = styled.span`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Value = styled.span`
    margin-bottom: 5px;
    font-size: smaller;
`;

export const ProductImage = styled.img`
    max-width: 150px;
    max-height: 150px;
    margin-right: 10px;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ModalSection = styled.div`
    margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
    font-size: 1.2em;
    font-weight: bold;
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const InlineContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 20px;
    align-items: center;
`;

export const StatusDropdown = styled.select`
    margin-left: 20px;
    border: 1px solid #ccc;
    font-size: medium;
`;
export const Badge = styled.span`
    padding: 5px;
    font-size: small;
    color: white;
    font-weight: light;

    &.결제완료 {
        background-color: white;
        color: black;
        border: 1px solid #ccc;
    }
    &.준비중 {
        background-color: yellow;
        color: black;
    }

    &.배송중 {
        background-color: green;
    }

    &.배송완료 {
        background-color: blue;
    }

    &.반품완료 {
        background-color: red;
    }
`;
