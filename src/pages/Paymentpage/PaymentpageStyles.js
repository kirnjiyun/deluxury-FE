import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  min-width: 0;
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    @media (max-width: 480px) {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  padding: 12px 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  min-width: 0;
  &:focus {
    outline: none;
    border-color: black;
  }
  @media (max-width: 480px) {
    padding: 10px 8px;
  }
`;

export const Button = styled.button`
  padding: 14px 24px;
  min-height: 44px;
  font-size: 18px;
  color: white;
  border: none;
  cursor: pointer;
  background-color: black;
  margin-top: 20px;
  width: 100%;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  @media (max-width: 480px) {
    margin-top: 16px;
    padding: 12px 20px;
    font-size: 16px;
  }
`;

export const Summary = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  min-width: 0;
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    @media (max-width: 480px) {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }
  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 8px;
  flex-wrap: wrap;
  span {
    font-size: 18px;
    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
`;
export const ErrorMessage = styled.div`
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
`;
