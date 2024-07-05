import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
`;

export const Col = styled.div``;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
    margin-bottom: 0.5rem;
`;

export const FormControl = styled.input`
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid #ccc;
    &:focus {
        outline: none;
        border-color: black;
    }
`;
