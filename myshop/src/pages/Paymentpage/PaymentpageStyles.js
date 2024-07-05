import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    max-width: 800px;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Form = styled.div`
    width: 100%;

    h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    &:focus {
        outline: none;
        border-color: black;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    color: white;
    border: none;
    cursor: pointer;
    background-color: black;
    margin-top: 20px;
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const Summary = styled.div`
    width: 100%;
    height: fit-content;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }
`;

export const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    span {
        font-size: 18px;
    }
`;
export const ErrorMessage = styled.div`
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
`;
