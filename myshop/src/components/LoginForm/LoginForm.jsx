import React from "react";
import { LoginFormContainer, Input, Title, Button } from "./LoginFormStyles";
export default function LoginForm() {
    return (
        <LoginFormContainer>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button type="button">로그인</Button>
        </LoginFormContainer>
    );
}
