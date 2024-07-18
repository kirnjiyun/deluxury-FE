// src/components/FooterStyles.js
import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
    background-color: #f1f1f1;
    padding: 20px;
    text-align: center;
    display: ${(props) => (props.show ? "block" : "none")};
`;

export const FooterContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    p {
        margin: 5px 0;
    }
    a {
        color: #000;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;
