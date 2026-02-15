import styled from '@emotion/styled';
import { css } from '@emotion/react';

const navFontStyles = css`
  @font-face {
    font-family: 'GongGothicMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export const Nav = styled.nav`
  ${navFontStyles}
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  font-family: 'GongGothicMedium', sans-serif;
  @media (max-width: 768px) {
    padding: 10px 12px;
  }
  @media (max-width: 480px) {
    padding: 8px 12px;
  }
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
    gap: 8px;
  }
  @media (max-width: 480px) {
    padding: 6px 0;
  }
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: black;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 4px;
  }
  @media (max-width: 480px) {
    font-size: 1.25em;
  }
`;

export const UnderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  position: relative;
  flex-wrap: wrap;
  gap: 8px;
  @media (max-width: 768px) {
    padding: 8px 0;
    flex-direction: column;
    align-items: stretch;
  }
  @media (max-width: 480px) {
    padding: 6px 0;
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    justify-content: space-between;
  }
`;

export const SearchButton = styled.button`
  font-size: 1.5em;
  cursor: pointer;
  background: none;
  border: none;
  padding: 8px;
  margin-left: 10px;
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
