import styled from '@emotion/styled';

const sizeMap = {
  small: { padding: '6px 12px', fontSize: '0.875rem' },
  medium: { padding: '10px 20px', fontSize: '1rem' },
  large: { padding: '14px 28px', fontSize: '1.125rem' },
};

const variantMap = {
  primary: {
    bg: '#000',
    color: '#fff',
    hoverBg: '#333',
  },
  secondary: {
    bg: 'transparent',
    color: '#000',
    border: '1px solid #000',
    hoverBg: '#f5f5f5',
  },
  ghost: {
    bg: 'transparent',
    color: '#000',
    hoverBg: 'rgba(0,0,0,0.05)',
  },
  danger: {
    bg: '#c00',
    color: '#fff',
    hoverBg: '#a00',
  },
};

export const StyledButton = styled.button`
  padding: ${({ size }) => sizeMap[size]?.padding || sizeMap.medium.padding};
  font-size: ${({ size }) => sizeMap[size]?.fontSize || sizeMap.medium.fontSize};
  font-weight: 500;
  border: ${({ variant }) => variantMap[variant]?.border || 'none'};
  border-radius: 4px;
  background-color: ${({ variant }) => variantMap[variant]?.bg || variantMap.primary.bg};
  color: ${({ variant }) => variantMap[variant]?.color || variantMap.primary.color};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ variant }) => variantMap[variant]?.hoverBg || variantMap.primary.hoverBg};
  }
`;
