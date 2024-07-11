import styled from "@emotion/styled";

export const ProductListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    padding: 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
