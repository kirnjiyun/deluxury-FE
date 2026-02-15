import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  margin-bottom: 12px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #000;
  }

  &[aria-invalid='true'] {
    border-color: #c00;
  }

  &:read-only {
    background-color: #f5f5f5;
    cursor: default;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 0.8125rem;
  color: #c00;
`;
