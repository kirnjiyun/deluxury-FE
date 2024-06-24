import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 2em;
    color: #333;
    margin: 20px 0;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    justify-content: center;
`;

export const Col = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1em;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
