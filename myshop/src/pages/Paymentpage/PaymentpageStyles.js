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
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    color: white;
    background-color: ${(props) => (props.primary ? "#ff5a5f" : "#0071c2")};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: ${(props) => (props.primary ? "#e60023" : "#005f9e")};
    }
`;

export const Summary = styled.div`
    width: 100%;

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
