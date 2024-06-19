// src/components/Footer.jsx
import React from "react";
import { FooterContainer, FooterContent } from "./FooterStyles";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <p>개인정보 처리방침</p>
                <p>본 사이트는 개인정보 보호법에 따라 개인정보를 보호합니다.</p>
                <p>
                    문의사항이 있으시면{" "}
                    <a href="mailto:info@example.com">info@example.com</a> 으로
                    연락해 주세요.
                </p>
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </FooterContent>
        </FooterContainer>
    );
}
