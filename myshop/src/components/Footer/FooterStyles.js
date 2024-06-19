// src/components/FooterStyles.js
import styled from "@emotion/styled";

export const FooterContainer = styled.div`
    background-color: lightgray;
    text-align: center;
    padding: 20px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: left;
    line-height: 1.6;

    p {
        margin: 10px 0;
    }

    a {
        color: #767676;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: 768px) {
        padding: 0 10px;

        p {
            font-size: 0.9em;
            margin: 8px 0;
        }
    }

    @media (max-width: 480px) {
        padding: 0 5px;

        p {
            font-size: 0.8em;
            margin: 6px 0;
        }
    }
`;
