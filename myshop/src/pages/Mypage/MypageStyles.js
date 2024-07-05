import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    margin-bottom: 20px;
`;

export const OrderList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const OrderItem = styled.li`
    border: 1px solid #ccc;
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
    flex-direction: column;
    align-items: start;
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

export const ModalContent = styled.div`
    padding: 20px;
    background: white;
    border-radius: 8px;
    position: relative;
    max-width: 600px;
    width: 100%;
    margin: auto;
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

export const ProductImage = styled.img`
    max-width: 100px;
    margin-bottom: 10px;
`;

export const SectionTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
`;
export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;

    .pagination {
        display: flex;
        list-style: none;
        padding: 0;

        li {
            margin: 0 5px;

            &.active a {
                font-weight: bold;
                color: #000;
            }

            a {
                padding: 8px 12px;
                border-radius: 4px;
                color: #000;
                cursor: pointer;
                text-decoration: none;

                &:hover {
                    background-color: #e0e0e0;
                }
            }
        }
    }
`;
