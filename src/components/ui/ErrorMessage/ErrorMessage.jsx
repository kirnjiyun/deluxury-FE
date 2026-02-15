import React from 'react';
import * as S from './ErrorMessage.styles';

/**
 * 페이지/섹션 단위 에러 메시지 (재시도 버튼 선택)
 */
export function ErrorMessage({ message, onRetry }) {
  return (
    <S.Wrapper role="alert">
      <S.Text>{message}</S.Text>
      {onRetry && (
        <S.RetryButton type="button" onClick={onRetry}>
          다시 시도
        </S.RetryButton>
      )}
    </S.Wrapper>
  );
}

export default ErrorMessage;
