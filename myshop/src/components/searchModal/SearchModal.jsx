import React from "react";
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    SearchInput,
} from "./SearchModalStyles";
const SearchModal = ({ onClose }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <h2>Search</h2>
                <SearchInput type="text" placeholder="검색어를 입력해주세요" />
            </ModalContent>
        </ModalOverlay>
    );
};

export default SearchModal;
