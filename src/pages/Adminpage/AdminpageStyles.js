import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  background-color: #f8f9fa;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 200px;
  min-width: 200px;
  background-color: #343a40;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
    flex-direction: row;
    justify-content: space-around;
    padding: 12px 16px;
  }
  h1 {
    margin: 0;
    font-size: 1.5em;
    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }
  h2 {
    margin: 10px 0;
    font-size: 1em;
    color: #28a745;
  }
  ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
    @media (max-width: 768px) {
      display: flex;
      gap: 8px;
      justify-content: center;
    }
    li {
      padding: 10px 0;
      cursor: pointer;
      text-align: center;
      &:hover {
        background-color: #495057;
      }
      @media (max-width: 768px) {
        padding: 8px 12px;
      }
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 0;
  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
`;

export const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  @media (max-width: 480px) {
    margin: 12px 0;
    padding: 12px;
  }
  h2 {
    margin-bottom: 10px;
    color: #495057;
    font-size: 1.1rem;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  min-height: 44px;
  background-color: #343a40;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #23272b;
  }
  @media (max-width: 480px) {
    padding: 10px 16px;
    width: 100%;
  }
`;
export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    .pagination {
        display: flex;
        list-style: none;
        padding: 0;
        li {
            margin: 0 5px;
            &.active a {
                font-weight: bold;
                color: #000;
            }
            a {
                padding: 8px 12px;
                border-radius: 4px;
                color: #000;
                cursor: pointer;
                text-decoration: none;
                &:hover {
                    background-color: #e0e0e0;
                }
            }
        }
    }
`;
