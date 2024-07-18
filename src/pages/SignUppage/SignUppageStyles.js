import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 20px;
    width: 500px;
    margin: 0 auto;
    font-size: small;
    h1 {
        margin-bottom: 20px;
        font-size: x-large;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
        font-size: smaller;
        h1 {
            font-size: medium;
        }
    }
`;
