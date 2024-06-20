import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Line = styled.p`
    height: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
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
