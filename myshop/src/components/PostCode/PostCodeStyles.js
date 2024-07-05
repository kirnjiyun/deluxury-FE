import styled from "@emotion/styled";

export const Container = styled.div`
    position: relative;
`;

export const AddressChangeContainer = styled.div``;

export const ChangeButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
        background-color: black;
        color: #fff;
    }

    .arrow {
        display: inline-block;
        transition: transform 0.2s ease;
    }

    .rotated {
        transform: rotate(180deg);
    }
`;

export const PostcodeWidget = styled.div`
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;

    &.open {
        max-height: 400px;
    }
`;
