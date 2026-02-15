import styled from '@emotion/styled';

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

export const MenuItem = styled.div`
  position: relative;
  display: inline-block;
  .dropdown-content {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

export const MenuLink = styled.a`
  color: ${({ $disabled }) => ($disabled ? '#ccc' : '#000')};
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  cursor: pointer;
  min-height: 44px;
  line-height: 24px;
  display: inline-flex;
  align-items: center;
  @media (max-width: 480px) {
    padding: 12px 10px;
  }
  &:hover {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 3px;
      background-color: #000;
    }
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 4px;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
  min-width: 200px;
  max-height: 70vh;
  overflow-y: auto;
  z-index: 10;
  -webkit-overflow-scrolling: touch;
  @media (max-width: 768px) {
    left: 0;
    right: 0;
    min-width: 100%;
    max-height: 60vh;
    padding: 16px;
  }
  @media (max-width: 480px) {
    padding: 12px;
    max-height: 50vh;
  }
`;
