import styled from "@emotion/styled";
export const Line = styled.p`
    height: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    font-size: 1em;
    cursor: pointer;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

export const Button = styled.button`
    background: ${(props) => (props.disabled ? "#ccc" : "#000")};
    color: ${(props) => (props.disabled ? "#666" : "#fff")};
    padding: 10px 0;
    border: none;
    width: 80%;
    display: block;
    margin: 20px auto;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.disabled ? 0.6 : 1)};
    transition: background 0.3s, color 0.3s, opacity 0.3s;

    &:hover {
        background: ${(props) => (props.disabled ? "#ccc" : "#333")};
    }
`;

export const Title = styled.h2`
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    position: relative;

    input[type="checkbox"] {
        margin-right: 10px;
        appearance: none;
        width: 20px;
        height: 20px;
        border: 1px solid #ddd;
        background-color: #f5f5f5;
        cursor: pointer;
        position: relative;
        transition: all 0.2s ease-in-out;

        &:checked {
            background-color: #000000;
            border: 1px solid #000000;
        }

        &:checked::after {
            content: "\\2713";
            color: white;
            font-size: 14px;
            position: absolute;
            top: 1px;
            left: 4px;
        }
    }

    span {
        margin: 0 8px;
        font-size: 1em;
    }
`;

export const LinkButton = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background: #000;
    color: #fff;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        background: #333;
    }
`;

export const Error = styled.div`
    font-size: x-small;
    color: red;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
`;

export const RadioInput = styled.input`
    display: none;
`;

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    padding-left: 25px;
    margin-right: 15px;
    font-size: 16px;
    user-select: none;

    &:before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        border: 1px solid #000;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
    }

    &:after {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #000;
        position: absolute;
        left: 3px;
        top: 50%;
        transform: translateY(-50%) scale(0);
        transition: transform 0.2s ease-in-out;
    }
`;

export const StyledRadioInput = styled(RadioInput)`
    &:checked + ${RadioLabel}:after {
        transform: translateY(-50%) scale(1);
    }
`;
