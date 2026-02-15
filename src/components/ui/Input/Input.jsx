import React from 'react';
import * as S from './Input.styles';

/**
 * 재사용 인풋 - 라벨, 에러 메시지, readOnly 지원
 */
export function Input({
  label,
  error,
  id,
  fullWidth = true,
  readOnly = false,
  ...rest
}) {
  const inputId = id || rest.name || rest.placeholder?.toLowerCase().replace(/\s/g, '-');
  return (
    <S.Wrapper fullWidth={fullWidth}>
      {label && <S.Label htmlFor={inputId}>{label}</S.Label>}
      <S.StyledInput
        id={inputId}
        readOnly={readOnly}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...rest}
      />
      {error && (
        <S.ErrorMessage id={`${inputId}-error`} role="alert">
          {error}
        </S.ErrorMessage>
      )}
    </S.Wrapper>
  );
}

export default Input;
