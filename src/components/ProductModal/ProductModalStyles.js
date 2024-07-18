// src/components/ProductModal/ProductModalStyles.js
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalContainer = styled.div`
    position: relative;
    padding: 20px;
    background: white;
    border-radius: 10px;
    width: 500px;
    max-width: 100%;
    margin: 0 auto;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
`;

export const Textarea = styled.textarea`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
`;

export const Select = styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: #0056b3;
    }
`;
