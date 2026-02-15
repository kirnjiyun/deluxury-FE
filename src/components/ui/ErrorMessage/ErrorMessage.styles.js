import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`;

export const Text = styled.p`
  margin: 0 0 16px;
  color: #c00;
  font-size: 1rem;
`;

export const RetryButton = styled.button`
  padding: 8px 16px;
  font-size: 0.875rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;
