import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    max-width: 500px;
    width: 100%;
    position: relative;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5em;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #ddd;
    font-size: 1em;
    background-color: transparent;
    border: none;
    :focus {
        outline: none;
    }
`;
