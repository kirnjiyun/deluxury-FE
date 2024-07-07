import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #f8f9fa;
`;

export const Sidebar = styled.div`
    width: 200px;
    background-color: #343a40;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    h1 {
        margin: 0;
        font-size: 1.5em;
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

        li {
            padding: 10px 0;
            cursor: pointer;
            text-align: center;
            &:hover {
                background-color: #495057;
            }
        }
    }
`;

export const Content = styled.div`
    flex: 1;
    padding: 20px;
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
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h2 {
        margin-bottom: 10px;
        color: #495057;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #343a40;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #23272b;
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
