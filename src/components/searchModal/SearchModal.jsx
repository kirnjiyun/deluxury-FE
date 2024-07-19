import React, { useState } from "react";
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    SearchInput,
    ResultList,
    ResultItem,
} from "./SearchModalStyles";
import { useGetProduct } from "../../hooks/useGetProduct";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ onClose }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const { data, error, isLoading } = useGetProduct();

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

    // 검색어를 기준으로 데이터 필터링 (검색어가 없으면 빈 배열 반환)
    const filteredData = searchQuery
        ? data?.data.filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];

    if (error) {
        console.error(`Query error: ${error.message}`); // 오류 로그
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
