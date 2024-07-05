import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
`;

export const OrderList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const OrderItem = styled.li`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
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
    flex-direction: row;
    align-items: start;
    gap: 10px;
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Label = styled.span`
    font-weight: bold;
    font-size: small;
    margin-right: 5px;
`;

export const Value = styled.span`
    font-size: x-small;
`;

export const ModalContent = styled.div`
    padding: 20px;
    background: white;
    border-radius: 8px;
    position: relative;
    max-width: 600px;
    width: 100%;
    margin: auto;
    max-height: 80vh; /* 최대 높이를 설정하고 */
    overflow-y: auto; /* 내부 스크롤을 활성화 */
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    position: sticky; /* sticky 속성을 사용하여 고정 */
    top: 10px;
    right: 10px;
    z-index: 1001; /* z-index를 설정하여 다른 요소 위에 오도록 */
    margin-left: auto;

    &:hover {
        font-weight: bold;
    }
`;

export const ProductImage = styled.img`
    max-height: 150px;
    margin-bottom: 10px;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    position: sticky;
    top: 0;
    background: transparent;
    z-index: 1000;
`;

export const ModalSection = styled.div`
    margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`;
