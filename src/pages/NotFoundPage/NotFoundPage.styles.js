import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 24px;
  text-align: center;
  @media (max-width: 480px) {
    padding: 16px;
    min-height: 50vh;
  }
`;

export const Code = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: #ddd;
  line-height: 1;
  margin-bottom: 8px;
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 8px;
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const Message = styled.p`
  color: #666;
  margin: 0 0 24px;
  font-size: 0.9375rem;
  @media (max-width: 480px) {
    font-size: 0.875rem;
    margin-bottom: 20px;
  }
`;
