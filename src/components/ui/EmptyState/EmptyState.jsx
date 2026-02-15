import React from 'react';
import * as S from './EmptyState.styles';
import { Button } from '../Button';

/**
 * 빈 목록/상태 메시지 - 아이콘(선택), 메시지, 액션 버튼
 */
export function EmptyState({ message, actionLabel, onAction, icon }) {
  return (
    <S.Wrapper>
      {icon && <S.Icon>{icon}</S.Icon>}
      <S.Message>{message}</S.Message>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </S.Wrapper>
  );
}

export default EmptyState;
