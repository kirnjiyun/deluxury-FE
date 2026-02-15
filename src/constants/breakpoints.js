/**
 * 반응형 브레이크포인트 (미디어 쿼리에서 사용)
 * 모바일 퍼스트: 기본은 모바일, min-width로 확장
 * 또는 max-width로 데스크톱부터 제한
 */
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1200,
};

/** @media (max-width: 768px) 등에서 사용할 문자열 */
export const mediaQueries = {
  maxMobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
  maxTablet: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
  maxDesktop: `@media (max-width: ${BREAKPOINTS.desktop}px)`,
  minTablet: `@media (min-width: ${BREAKPOINTS.tablet + 1}px)`,
  minDesktop: `@media (min-width: ${BREAKPOINTS.desktop + 1}px)`,
};
