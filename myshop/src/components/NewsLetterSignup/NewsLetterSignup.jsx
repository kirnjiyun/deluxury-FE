/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Header = styled.div`
    margin-bottom: 20px;
    font-size: 18px;
    color: #555;
`;

const Links = styled.div`
    display: flex;
    gap: 20px;
    font-size: 14px;
    color: #000;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    position: relative;

    &:hover {
        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 1px;
            background-color: #000;
        }
    }
`;

function NewsletterSignup() {
    return (
        <Container>
            <Header>뉴스레터에 가입하세요</Header>
            <Links>
                <Link href="https://www.tiktok.com">TIKTOK</Link>
                <Link href="https://www.instagram.com">INSTAGRAM</Link>
                <Link href="https://www.facebook.com">FACEBOOK</Link>
                <Link href="https://twitter.com">X</Link>
                <Link href="https://www.pinterest.com">PINTEREST</Link>
                <Link href="https://www.kakao.com">KAKAO</Link>
                <Link href="https://www.youtube.com">YOUTUBE</Link>
                <Link href="https://www.spotify.com">SPOTIFY</Link>
            </Links>
        </Container>
    );
}

export default NewsletterSignup;
