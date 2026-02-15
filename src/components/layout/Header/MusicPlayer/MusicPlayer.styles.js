import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideText = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;
const blinkColor = keyframes`
  0%, 100% { color: #333; }
  50% { color: #cacaca; }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
  @media (max-width: 768px) {
    margin-right: 0;
    gap: 6px;
  }
  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const SliderContainer = styled.div`
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 480px) {
    width: 60px;
  }
`;

export const SliderText = styled.div`
  display: inline-block;
  animation: ${slideText} 8s linear infinite, ${blinkColor} 1s step-start infinite;
  font-size: 12px;
  color: #333;
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconButton = styled.button`
  padding: 8px;
  min-width: 44px;
  min-height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 480px) {
    min-width: 36px;
    min-height: 36px;
    padding: 4px;
  }
`;
