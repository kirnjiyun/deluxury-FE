import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
    position: relative;
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
        width: 80%;
        padding: 20px;
        font-size: smaller;
        h1 {
            font-size: medium;
        }
    }
`;
export const Underline = styled.div`
    background: black;
    width: 300px;
    height: 3px;
`;
