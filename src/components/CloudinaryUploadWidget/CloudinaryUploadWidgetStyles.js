// cloudinaryWidgetStyles.js

import styled from "@emotion/styled";

export const UploadButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;
