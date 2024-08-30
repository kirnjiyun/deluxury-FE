// cloudinaryWidgetStyles.js

import styled from "@emotion/styled";

export const UploadButton = styled.button`
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: black;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;
