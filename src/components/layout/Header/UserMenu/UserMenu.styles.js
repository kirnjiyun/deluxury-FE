import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
  @media (max-width: 480px) {
    gap: 8px;
    font-size: 0.7rem;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  white-space: nowrap;
  padding: 6px 4px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 480px) {
    padding: 4px 2px;
  }
`;
