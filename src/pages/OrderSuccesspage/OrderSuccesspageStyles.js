import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ffffff;
    padding: 20px;
`;

export const Message = styled.p`
    font-size: 1em;
    margin-bottom: 0.5rem;
    text-align: center;
    color: black;
    @media (max-width: 600px) {
        font-size: 0.8em;
    }
`;
