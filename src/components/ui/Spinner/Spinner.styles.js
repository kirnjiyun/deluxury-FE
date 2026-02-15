import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const sizeMap = {
  small: '20px',
  medium: '40px',
  large: '60px',
};

export const Spinner = styled.div`
  width: ${({ size }) => sizeMap[size] || sizeMap.medium};
  height: ${({ size }) => sizeMap[size] || sizeMap.medium};
  border: 3px solid #eee;
  border-top-color: #000;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
