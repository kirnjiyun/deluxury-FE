import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 300px;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-grow: 1;
`;

export const Col = styled.div`
    flex: 1 1 300px;
    max-width: 300px;
    margin: 10px;
`;
