import styled from "@emotion/styled";

export const MainContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
`;

export const SnapContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 480px) {
    min-height: 360px;
  }
`;

export const FullscreenSection = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  @media (max-width: 768px) {
    min-height: 360px;
  }
  @media (max-width: 480px) {
    min-height: 320px;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  flex-shrink: 0;
  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (max-width: 480px) {
    padding: 12px 16px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-size: 1.5rem;
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-top: 16px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Col = styled.div`
  flex: 1 1 300px;
  max-width: 300px;
  margin: 0;
  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;
