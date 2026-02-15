import React from 'react';
import * as S from './PageLayout.styles';
import { Spinner } from '../../ui/Spinner';
import { ErrorMessage } from '../../ui/ErrorMessage';

/**
 * 페이지 공통 레이아웃 - 로딩/에러/빈 상태 처리
 */
export function PageLayout({
  children,
  isLoading = false,
  error = null,
  onRetry,
  title,
  maxWidth = 1200,
}) {
  if (isLoading) {
    return (
      <S.Wrapper maxWidth={maxWidth}>
        <S.Center>
          <Spinner size="large" />
        </S.Center>
      </S.Wrapper>
    );
  }

  if (error) {
    return (
      <S.Wrapper maxWidth={maxWidth}>
        <ErrorMessage
          message={typeof error === 'string' ? error : error?.message || '데이터를 불러오지 못했습니다.'}
          onRetry={onRetry}
        />
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper maxWidth={maxWidth}>
      {title && <S.Title>{title}</S.Title>}
      {children}
    </S.Wrapper>
  );
}

export default PageLayout;
