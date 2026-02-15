import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './NotFoundPage.styles';
import { Button } from '../../components/ui/Button';
import { ROUTES } from '../../constants';

/**
 * 404 Not Found 페이지
 */
export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Code>404</S.Code>
      <S.Title>페이지를 찾을 수 없습니다</S.Title>
      <S.Message>요청하신 주소가 올바르지 않거나 삭제되었을 수 있습니다.</S.Message>
      <Button variant="primary" onClick={() => navigate(ROUTES.HOME)}>
        홈으로 돌아가기
      </Button>
    </S.Wrapper>
  );
}

export default NotFoundPage;
