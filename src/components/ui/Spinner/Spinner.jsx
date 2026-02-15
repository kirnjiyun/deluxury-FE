import React from 'react';
import * as S from './Spinner.styles';

/**
 * 로딩 스피너 - size: small | medium | large
 */
export function Spinner({ size = 'medium' }) {
  return <S.Spinner size={size} role="status" aria-label="로딩 중" />;
}

export default Spinner;
