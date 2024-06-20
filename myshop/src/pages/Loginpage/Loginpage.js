import React from "react";
import { Container, Underline } from "./LoginpageStyles";
import LoginForm from "../../components/LoginForm/LoginForm";
export default function SignUppage() {
    return (
        <Container>
            <h1>로그인</h1>
            <Underline></Underline>
            <LoginForm />
        </Container>
    );
}
