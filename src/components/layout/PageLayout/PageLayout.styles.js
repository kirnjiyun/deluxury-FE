import styled from '@emotion/styled';

export const Wrapper = styled.main`
  max-width: ${({ maxWidth }) => maxWidth}px;
  margin: 0 auto;
  padding: 24px 16px;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  @media (max-width: 480px) {
    padding: 16px 12px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 24px;
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 16px;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;
