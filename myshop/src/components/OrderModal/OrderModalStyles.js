import styled from "@emotion/styled";

export const ModalContent = styled.div`
    padding: 20px;
    background: white;
    border-radius: 8px;
    max-width: 600px;
    height: 800px;
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
    margin-bottom: 10px;
    align-items: center;
`;

export const StatusDropdown = styled.select`
    margin-left: 20px;
    border: 1px solid #ccc;
    font-size: medium;
`;
