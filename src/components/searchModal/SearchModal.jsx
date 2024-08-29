import React, { useState } from "react";
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    SearchInput,
    ResultList,
    ResultItem,
} from "./SearchModalStyles";
import { useGetProductsForSearch } from "../../hooks/useGetProduct";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ onClose }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const { data, error, isLoading } = useGetProductsForSearch();

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleItemClick = (item) => {
        const { bigCategory, category, _id } = item;
        onClose();
        navigate(
            `/${bigCategory.toLowerCase()}/${category.main.toLowerCase()}/${category.sub.toLowerCase()}/${_id}`
        );
    };

    const filteredData = searchQuery
        ? data?.data.filter((item) => {
              const name = item.name?.toLowerCase().trim();
              return name && name.includes(searchQuery.toLowerCase().trim());
          })
        : [];

    if (error) {
        console.error(`Query error: ${error.message}`);
    }

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <h2>Search</h2>
                <SearchInput
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {!isLoading &&
                    !error &&
                    searchQuery &&
                    filteredData.length === 0 && <p>상품이 없습니다.</p>}
                {filteredData.length > 0 && (
                    <ResultList>
                        {filteredData.map((item) => (
                            <ResultItem
                                key={item._id}
                                onClick={() => handleItemClick(item)}
                            >
                                {item.name}
                            </ResultItem>
                        ))}
                    </ResultList>
                )}
            </ModalContent>
        </ModalOverlay>
    );
};

export default SearchModal;
