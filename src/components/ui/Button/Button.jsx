import React from 'react';
import * as S from './Button.styles';

/**
 * 재사용 버튼 - variant, size, fullWidth 등 지원
 */
export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  ...rest
}) {
  return (
    <S.StyledButton
      type={type}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </S.StyledButton>
  );
}

export default Button;
