import styled from "@emotion/styled";
import { css } from "@emotion/react";

const NavFontStyles = css`
    @font-face {
        font-family: "GongGothicMedium";
        src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }
`;

export const NavbarContainer = styled.nav`
    ${NavFontStyles}
    background-color: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
    font-family: "GongGothicMedium", sans-serif;
`;

export const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Logo = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    color: black;
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

export const UserOptions = styled.div`
    display: flex;
    gap: 15px;
    font-size: xx-small;

    a {
        color: #000;
        text-decoration: none;
        position: relative;
        font-family: "GongGothicMedium", sans-serif;

        &:hover {
            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 100%;
                height: 2px;
                background-color: #000;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`;

export const SearchIcon = styled.div`
    font-size: 1.5em;
    cursor: pointer;
    margin-left: auto;
`;

export const UnderBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 10px 0;
`;

export const MainMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    font-size: small;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        padding: 5px 0;
    }
`;

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    padding: 20px;
    min-width: 200px;
    z-index: 1;
    left: 0;
    top: 45px;
    font-family: "GongGothicMedium", sans-serif;
`;

export const Column = styled.div`
    float: left;
    width: 200px;
    padding: 10px;

    h3 {
        margin-top: 0;
    }

    a {
        font-family: sans-serif;
        color: black;
        padding: 8px 16px;
        text-decoration: none;
        display: block;
        font-size: small;
    }
`;

export const MenuItem = styled.div`
    position: relative;
    display: inline-block;

    a {
        color: ${({ index }) => (index > 1 ? "#ccc" : "#000")};
        text-decoration: none;
        font-weight: bold;
        position: relative;
        padding: 10px 15px;
        font-family: "GongGothicMedium", sans-serif;

        &.active {
            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 100%;
                height: 3px;
                background-color: #000;
            }
        }

        &:hover {
            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 100%;
                height: 3px;
                background-color: #000;
            }
        }
    }

    &:hover .dropdown-content {
        display: flex;
    }

    .dropdown-content {
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    }
`;
