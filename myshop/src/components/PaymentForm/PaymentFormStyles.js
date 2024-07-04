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
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    &:focus {
        outline: none;
        border-color: #80bdff;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
`;
