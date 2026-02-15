// src/components/CartSummary/CartSummaryStyles.js
import styled from "@emotion/styled";

export const SummaryContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-top: 3px solid #000;
  border-bottom: 1px solid #000;
  @media (max-width: 480px) {
    margin-top: 16px;
    padding: 16px;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SummaryItem = styled.div`
  flex: 1;
  min-width: 80px;
  text-align: center;
`;

export const TotalItem = styled.div`
  flex: 1;
  min-width: 80px;
  text-align: center;
  font-weight: bold;
`;
