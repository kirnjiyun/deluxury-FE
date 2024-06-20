import styled from "@emotion/styled";
import { css } from "@emotion/react";
export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 20px;
    width: 300px;
    margin: 0 auto;
    font-size: small;
    h1 {
        margin-bottom: 20px;
        font-size: x-large;
    }
    @media (max-width: 768px) {
        width: 80%;
        padding: 20px;
        font-size: smaller;
        h1 {
            font-size: medium;
        }
    }
`;

const buttonStyles = (disabled) => css`
    background: ${disabled ? "#ccc" : "#000"};
    color: ${disabled ? "#666" : "#fff"};
    padding: 10px 0%;
    border: none;
    width: 80%;
    display: block;
    margin: 20px auto;
    cursor: ${disabled ? "not-allowed" : "pointer"};
    opacity: ${disabled ? 0.6 : 1};
    transition: background 0.3s, color 0.3s, opacity 0.3s;

    &:hover {
        background: ${disabled ? "#ccc" : "#333"};
    }
`;
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    font-size: 1em;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;
export const Button = styled.button`
    ${(props) => buttonStyles(props.disabled)}
`;

export const Title = styled.h2`
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 20px;
`;
