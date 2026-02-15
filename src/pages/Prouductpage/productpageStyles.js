import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 300px;
  padding: 0 8px;
  @media (max-width: 768px) {
    margin-bottom: 200px;
    padding: 0 12px;
  }
  @media (max-width: 480px) {
    margin-bottom: 160px;
    padding: 0 8px;
  }
`;

export const Row = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
  gap: 8px;
  @media (max-width: 768px) {
    margin: 8px 0;
    gap: 12px;
  }
  @media (max-width: 480px) {
    margin: 6px 0;
    gap: 8px;
  }
`;

export const Col = styled.div`
  flex: 1 1 300px;
  max-width: 300px;
  margin: 0;
  @media (max-width: 768px) {
    flex: 1 1 240px;
    max-width: 280px;
  }
  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
    min-width: 0;
  }
`;
