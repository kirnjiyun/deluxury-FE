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

        &:hover {
            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -2px; /* Adjust this value to move the underline further down */
                width: 100%;
                height: 2px; /* Adjust this value to make the underline thicker */
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

    a {
        color: #000;
        text-decoration: none;
        font-weight: bold;
        position: relative;

        &:hover {
            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -5px;
                width: 100%;
                height: 3px;
                background-color: #000;
            }
        }
    }
`;

export const MenuItem = styled.a`
    color: #000;
    text-decoration: none;
    font-weight: bold;
    position: relative;

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
`;
