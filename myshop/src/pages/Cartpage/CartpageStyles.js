import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 20px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #f9f9f9;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    gap: 20px;
`;
export const Button = styled.button`
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    transition: transform 0.1s, background-color 0.1s;

    &:active {
        transform: scale(0.95);
    }
`;
